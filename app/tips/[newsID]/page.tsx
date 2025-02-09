import { supabase } from "@/lib/supabase"
import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser"
import NewsletterSubscribe from "@/components/newsletter-subscribe"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ShareButtons from "@/components/ShareButtons"

async function getSeoTip(id: string) {
  const { data, error } = await supabase.from("seo_tips").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching SEO tip:", error)
    return null
  }

  return data
}

export default async function TipPage({ searchParams }: { searchParams: { id: string } }) {
  const tip = await getSeoTip(searchParams.id)

  if (!tip) {
    return (
      <div className="min-h-screen bg-[#1d1d1d] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Tip not found</h1>
      </div>
    )
  }

  const shareUrl = `https://yourdomain.com/tips/${searchParams.id}`

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/tips"
          className="text-blue-400 hover:text-blue-300 mb-8 inline-block transition-colors duration-200"
        >
          &larr; Back to Tips
        </Link>
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-3/4">
            <h1 className="text-4xl font-bold mb-6">{tip.title}</h1>
            <div className="flex items-center mb-8">
              <Avatar className="h-10 w-10 mr-4 rounded-full border-2 border-gray-300">
                <AvatarImage src="/avatar-placeholder.png" alt="Author" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin</p>
                <p className="text-sm text-gray-400">Published on: {new Date(tip.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            {tip.image_url && (
              <div className="mb-8 flex justify-center">
                <Image
                  src={tip.image_url || "/placeholder.svg"}
                  alt={tip.title}
                  width={800}
                  height={400}
                  className="rounded-lg w-full max-w-2xl h-auto object-cover"
                />
              </div>
            )}
            <div className="prose prose-invert max-w-none space-y-4">{parse(tip.content)}</div>
          </article>
          <aside className="lg:w-1/4">
            <div className="sticky top-8 space-y-8">
              <NewsletterSubscribe />
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Share this tip</h2>
                <ShareButtons url={shareUrl} title={tip.title} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

