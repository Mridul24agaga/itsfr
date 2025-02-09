import Link from "next/link"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import type { SeoTip } from "@/types/seo-tip"
import { Sidebar } from "@/components/sidebar"
import NewsletterSubscribe from "@/components/newsletter-subscribe"

async function getSeoTips(): Promise<SeoTip[]> {
  const { data, error } = await supabase
    .from("seo_tips")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10)

  if (error) {
    console.error("Error fetching SEO tips:", error)
    return []
  }

  return data
}

export default async function TipsPage() {
  const tips = await getSeoTips()

  return (
    <div className="flex bg-[#1d1d1d] text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Daily SEO Tips</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tips.map((tip) => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <NewsletterSubscribe />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function TipCard({ tip }: { tip: SeoTip }) {
  // Function to extract the first 4 words
  const getFirstFourWords = (content: string) => {
    const strippedContent = content.replace(/<[^>]+>/g, "") // Remove HTML tags
    const words = strippedContent.trim().split(/\s+/)
    return words.slice(0, 4).join(" ") + (words.length > 4 ? "..." : "")
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {tip.image_url && (
        <Image
          src={tip.image_url || "/placeholder.svg"}
          alt={tip.title}
          width={800}
          height={600}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
        <p className="text-gray-400 mb-4">{getFirstFourWords(tip.content)}</p>
        <Link
          href={`/tips/${tip.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

