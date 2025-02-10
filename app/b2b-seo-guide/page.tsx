"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Quiz } from "./quiz"
import { ResponsiveTable } from "@/components/responsive-table"
import { Sidebar } from "@/components/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: "what-is-b2b-seo",
    title: "What is B2B SEO?",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">
          B2B SEO is the process of optimizing a website to improve its visibility on search engines like Google,
          specifically for businesses that sell products or services to other businesses. Unlike business-to-consumer
          SEO, B2B SEO focuses on attracting and engaging decision-makers, such as managers, executives, and procurement
          teams, who are often part of longer and more complex buying cycles.
        </p>
        <p className="text-sm sm:text-base mb-4">
          The goal of SEO for B2B companies is to generate traffic to a website, to increase its search engine results
          (SERPs), but also to increase its qualified lead generation. Leads are what are ultimately going to increase
          sales.
        </p>
        <p className="text-sm sm:text-base">
          A B2B SEO strategy will do this by targeting specific industries, niches, and professionals that fall within
          its target audience. This requires a tailored approach that accounts for longer sales cycles, smaller search
          volumes, and high-value keywords. While these are common B2B SEO challenges, each one has a solution or
          workaround.
        </p>
      </>
    ),
  },
  {
    id: "b2b-vs-b2c-seo",
    title: "B2B vs B2C SEO",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">
          While the core principles of SEO, including keyword research, content research, and technical optimization,
          are both the same for B2B and B2C, there are some key differences:
        </p>
        <ResponsiveTable
          headers={["Aspect", "B2B SEO", "B2C SEO"]}
          rows={[
            [
              "Audience Targeting",
              "Targets professionals who are more likely to make rational, data-driven decisions. This target audience also often consults with other stakeholders before committing.",
              "Focuses on a broader audience of individuals. They often look for quick solutions and do impulse or emotional purchases.",
            ],
            [
              "Keyword Strategy",
              "Relies on niche, low-volume, and intent-driven keywords.",
              "Targets broad, high-volume keywords.",
            ],
            [
              "Content Focus",
              "B2B SEO content strategies include thought-leadership articles, case studies, whitepapers and in-depth guides that address specific pain points for businesses.",
              "B2C content focuses on product features, reviews, and promotions.",
            ],
            [
              "Buying Cycle",
              "The B2B buying cycle will include multiple touchpoints. There is usually a longer consideration time period and leads need to be nurtured throughout every stage.",
              "The B2C purchase process is quicker and is more transactional.",
            ],
            [
              "Social Media",
              "Because of the professionalism of B2B target audience, social media is reserved for only a few professional/industry-specific platforms",
              "B2C often uses popular social media channels and can be highly creative and fun with the content.",
            ],
            [
              "Goals",
              "It focuses on lead quality, return on investment (ROI), and trust with your audience.",
              "Looks more at traffic volume, sales, and engagement with followers and audiences.",
            ],
            [
              "Link Building Strategy",
              "Encourages link-building with industry-specific, professional sites.",
              "Creates link-building partnerships with popular blogs and social media influencers.",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "benefits",
    title: "6 Key Benefits of B2B SEO",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">
          SEO for B2B offers unique advantages for businesses that want to attract other businesses as clients. Here are
          those 6 key B2B SEO advantages:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-4 text-sm sm:text-base">
          <li>
            <strong>Drives high-quality traffic:</strong> With niche keywords and search queries highly focused on your
            target audience, the traffic generated on your site will be more qualified and increase the likelihood of
            conversion.
          </li>
          <li>
            <strong>Generates qualified leads:</strong> With newly optimized landing pages, solutions for pain points,
            and a focus on buyer personas, a complete B2B SEO strategy can boost your business sales.
          </li>
          <li>
            <strong>Improves brand authority:</strong> Your content strategy will include well-researched, informative
            content tailored to your industry, increasing your credibility.
          </li>
          <li>
            <strong>Offers long-term ROI:</strong> B2B SEO is a long-term strategy and investment. With optimized
            content and website, your site will continue to attract leads and generate results over time.
          </li>
          <li>
            <strong>Helps you outrank competitors:</strong> With continuous B2B SEO, you'll gain an edge in competitive
            markets.
          </li>
          <li>
            <strong>Scales with your business:</strong> As your business grows, your B2B SEO will scale with you. It
            builds on your content to reach a larger audience and get those additional industry professionals.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "strategy",
    title: "B2B SEO Strategy in 12 Steps",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">
          Let's dive straight into our 12-step SEO for B2B companies guide! By implementing a multi-faceted approach to
          your SEO, you'll increase your visibility and discover how to create a winning B2B SEO strategy in 2025.
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-4 text-sm sm:text-base">
          <li>Conduct an SEO audit</li>
          <li>Complete a competitor analysis</li>
          <li>Create buyer personas</li>
          <li>Research your keywords</li>
          <li>Develop a B2B content strategy</li>
          <li>Use visual content</li>
          <li>Include local B2B SEO</li>
          <li>Check technical B2B SEO</li>
          <li>Include off-page SEO</li>
          <li>Use B2B SEO techniques for qualified lead conversions</li>
          <li>Track your KPIs</li>
          <li>Measure success with analytics</li>
        </ol>
      </>
    ),
  },
  {
    id: "challenges",
    title: "Common Challenges in B2B SEO",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">
          B2B SEO has its own set of challenges, mostly due to the nature of business-to-business transactions. There
          are several complexities involved, but there are solutions for all of them, which we will look at in more
          detail in the following table.
        </p>
        <ResponsiveTable
          headers={["The Challenges of B2B SEO", "The Solutions"]}
          rows={[
            [
              "Low-volume keywords",
              "Focus on long-tail keywords that demonstrate clear intent, even if this means the search volumes are low. Use keyword research tools to identify phrases that align with your audience's needs. Create high-value content around them.",
            ],
            [
              "Navigate long sales cycles",
              "Develop content tailored to each stage of the funnel. Make sure you use the right user intent and tone for that stakeholder.",
            ],
            [
              "Establishing authority in a competitive space",
              "Publish thought leadership content to showcase your expertise.",
            ],
            [
              "Balancing SEO with User Intent",
              "SEO optimization sometimes conflicts with creating natural and engaging content for readers. The solution is to use keywords strategically and focus on answering questions and solving problems with the content.",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "faq",
    title: "FAQ around B2B SEO",
    content: (
      <>
        <p className="text-sm sm:text-base mb-4">Here are a few common FAQ we get around B2B SEO.</p>
        <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">
          How long does it take to see results with SEO?
        </h3>
        <p className="text-sm sm:text-base mb-4">
          B2B SEO is a long-term strategy, and depending on different factors, it often takes time to see results.
          However, you should see the initial improvements in rankings and traffic within 3-6 months. An increase in
          leads and ROI could take longer.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">Does SEO matter for B2B?</h3>
        <p className="text-sm sm:text-base mb-4">
          Yes, SEO is crucial for B2B companies. It helps improve visibility, attract qualified leads, and establish
          authority in your industry.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">Is SEO worth it for B2B?</h3>
        <p className="text-sm sm:text-base">
          Absolutely. While B2B SEO may require more patience and a different approach compared to B2C SEO, it can
          provide significant long-term benefits including increased visibility, higher quality leads, and improved ROI.
        </p>
      </>
    ),
  },
  {
    id: "quiz-1",
    title: "Quiz: B2B SEO Basics",
    content: (
      <Quiz
        question="What is the main focus of B2B SEO compared to B2C SEO?"
        options={[
          "Targeting a broad audience",
          "Focusing on impulse purchases",
          "Attracting decision-makers in businesses",
          "Maximizing social media engagement",
        ]}
        correctAnswer={2}
        onComplete={(isCorrect) => console.log(isCorrect ? "Correct answer!" : "Incorrect answer.")}
      />
    ),
  },
]

export default function B2BSEOCourse() {
  const [currentSection, setCurrentSection] = useState("")
  const [progress, setProgress] = useState(0)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const savedProgress = localStorage.getItem("b2bSEOCourseProgress")
    if (savedProgress) {
      const { currentSection, progress } = JSON.parse(savedProgress)
      setCurrentSection(currentSection)
      setProgress(progress)
    } else {
      setCurrentSection(sections[0].id)
      setProgress(0)
    }
  }, [])

  const handleSectionChange = (id: string) => {
    setCurrentSection(id)
    const newProgress = ((sections.findIndex((section) => section.id === id) + 1) / sections.length) * 100
    setProgress(newProgress)
    localStorage.setItem("b2bSEOCourseProgress", JSON.stringify({ currentSection: id, progress: newProgress }))
    setIsMobileOpen(false)
  }

  const currentSectionIndex = sections.findIndex((section) => section.id === currentSection)
  const isLastSection = currentSectionIndex === sections.length - 1
  const isFirstSection = currentSectionIndex === 0

  const handleNext = () => {
    if (!isLastSection) {
      handleSectionChange(sections[currentSectionIndex + 1].id)
    }
  }

  const handlePrevious = () => {
    if (!isFirstSection) {
      handleSectionChange(sections[currentSectionIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 font-sans">
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 md:ml-[60px]">
          <ScrollArea className="h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <header className="mb-8 flex items-center">
                {/* Mobile Sidebar Trigger */}
                <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden mr-4">
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-0">
                    <div className="h-full bg-[#0a0a0a]">
                    </div>
                  </SheetContent>
                </Sheet>

                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">B2B SEO Course</h1>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">Master the art of B2B SEO</p>
                </div>
              </header>

              <Progress value={progress} className="w-full mb-8" indicatorColor="bg-orange-500" />

              <main className="space-y-8">
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {sections.find((section) => section.id === currentSection)?.title}
                  </h2>
                  {sections.find((section) => section.id === currentSection)?.content}
                </section>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={handlePrevious}
                    disabled={isFirstSection}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Previous
                  </Button>
                  <Button onClick={handleNext} disabled={isLastSection} className="bg-orange-500 hover:bg-orange-600">
                    Next
                  </Button>
                </div>
              </main>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

