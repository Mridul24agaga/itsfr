"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Sidebar } from "@/components/sidebar"

type SEOTool = {
  name: string
  description: string
  url: string
  image: string
}

const seoTools: SEOTool[] = [
  {
    name: "Ahrefs Backlink Checker",
    description: "Top 100 backlinks for any URL.",
    url: "https://ahrefs.com/backlink-checker",
    image: "/ahref.png",
  },
  {
    name: "Animalz Revive",
    description: "Updates content for SEO.",
    url: "https://www.animalz.co",
    image: "/animalz.png",
  },
  {
    name: "AnswerThePublic",
    description: "Converts questions to keywords.",
    url: "https://answerthepublic.com",
    image: "/answer.png",
  },
  {
    name: "Bing Webmaster Tools",
    description: "Overlooked SEO platform.",
    url: "https://www.bing.com/webmasters",
    image: "/bing.png",
  },
  {
    name: "Check My Links",
    description: "Identifies broken/invalid links.",
    url: "https://chromewebstore.google.com/detail/check-my-links/aajoalonednamcpodaeocebfgldhcpbe",
    image: "/link.png",
  },
  {
    name: "Checkbot",
    description: "Fixes broken links, avoids duplicates.",
    url: "https://www.checkbot.io",
    image: "/check.png",
  },
  {
    name: "Chrome DevTools",
    description: "Competitor research and testing.",
    url: "https://developers.google.com/web/tools/chrome-devtools",
    image: "/chrome.png",
  },
  {
    name: "Dofollow Link Checker",
    description: "Checks for nofollow/do-follow links.",
    url: "https://www.gridhooks.com/tools/dofollow-link-checker",
    image: "/dofollow.png",
  },
  {
    name: "Google Analytics",
    description: "Tracks website traffic.",
    url: "https://analytics.google.com",
    image: "/analytics.png",
  },
  {
    name: "Google Keyword Planner",
    description: "Language search analysis.",
    url: "https://ads.google.com/home/tools/keyword-planner",
    image: "/keyword.png",
  },
  {
    name: "Google My Business",
    description: "Manages business on Google Search and Maps.",
    url: "https://www.google.com/business",
    image: "/business.png",
  },
  {
    name: "Google Search Console",
    description: "Feedback on site visibility.",
    url: "https://search.google.com/search-console",
    image: "/search.png",
  },
  {
    name: "Google Search Tricks & Operators",
    description: "Easy-to-use search operators.",
    url: "https://ahrefs.com/blog/google-advanced-search-operators",
    image: "/trick.png",
  },
  {
    name: "Google Tag Manager",
    description: "Manages website tags without code changes.",
    url: "https://tagmanager.google.com",
    image: "/tag.png",
  },
  {
    name: "Google Trends",
    description: "Analyzes search query popularity.",
    url: "https://trends.google.com",
    image: "/trend.png",
  },
  {
    name: "HARO",
    description: "Connects with journalists for backlinks.",
    url: "https://www.helpareporter.com",
    image: "/harop.png",
  },
  {
    name: "Hunter",
    description: "Finds email addresses, 50 free searches/month.",
    url: "https://hunter.io",
    image: "/hunter.png",
  },
  {
    name: "INK",
    description: "AI platform for SEO, grammar, and structure.",
    url: "https://inkforall.com",
    image: "/ink.png",
  },
  {
    name: "Lighthouse",
    description: "SEO and performance audits.",
    url: "https://developers.google.com/web/tools/lighthouse",
    image: "/lighthouse.png",
  },
  {
    name: "Moz Keyword Explorer",
    description: "Domain analysis and keyword research.",
    url: "https://moz.com/explorer",
    image: "/moz.png",
  },
  {
    name: "MozBar",
    description: "At-a-glance data on Domain Authority.",
    url: "https://moz.com/products/pro/seo-toolbar",
    image: "/mozbar.png",
  },
 
  {
    name: "Rank Math",
    description: "SEO plugin for WordPress.",
    url: "https://rankmath.com",
    image: "/rankmath.png",
  },
  {
    name: "Screaming Frog",
    description: "Crawls URLs for onsite SEO.",
    url: "https://www.screamingfrog.co.uk/seo-spider",
    image: "/screamingfrog.png",
  },
  {
    name: "SEO Minion",
    description: "Displays SEO related information.",
    url: "https://seominion.com",
    image: "/minion.png",
  },
  {
    name: "SEO Review Tools",
    description: "Checks domain authority and content optimization.",
    url: "https://www.seoreviewtools.com",
    image: "/seoreviewtool.png",
  },
  {
    name: "SEOPress",
    description: "On-page SEO for WordPress.",
    url: "https://www.seopress.org",
    image: "/seopress.png",
  },
  {
    name: "SEOquake",
    description: "Information on webpage SEO.",
    url: "https://www.seoquake.com",
    image: "/seoquake.png",
  },
  {
    name: "Serpstat",
    description: "Backlinks and competitor analysis.",
    url: "https://serpstat.com",
    image: "/serp.png",
  },
  {
    name: "SimilarWeb",
    description: "Traffic analysis for any webpage.",
    url: "https://www.similarweb.com",
    image: "/similar.png",
  },
  {
    name: "Siteliner",
    description: "Shows duplicate content and broken links.",
    url: "https://www.siteliner.com",
    image: "/siteliner.png",
  },
  {
    name: "SmallSEOTools Domain Authority Checker",
    description: "Checks domain authority.",
    url: "https://smallseotools.com/domain-authority-checker",
    image: "/smallseotools.png",
  },
  {
    name: "Soovle",
    description: "Generates popular search keywords.",
    url: "https://soovle.com",
    image: "/seocom.png",
  },
  {
    name: "Thruuu",
    description: "Extracts information from Google search results.",
    url: "https://www.thruuu.com",
    image: "/thruu.png",
  },
  {
    name: "Ubersuggest",
    description: "Keyword research and SEO insights.",
    url: "https://neilpatel.com/ubersuggest",
    image: "/neil.png",
  },
  {
    name: "UENI",
    description: "Creates SEO-friendly websites from a form.",
    url: "https://www.ueni.com",
    image: "/ueni.png",
  },
  {
    name: "Valentin.app",
    description: "Localized Google search results.",
    url: "https://valentin.app",
    image: "/valentin.png",
  },
  {
    name: "Yoast SEO",
    description: "WordPress plugin for search-engine-friendly sites.",
    url: "https://yoast.com",
    image: "/yoast.png",
  },
]

const ToolCard: React.FC<{ tool: SEOTool }> = ({ tool }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="bg-[#0a0a0a] border-orange-500 border-2 overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={tool.image || "/placeholder.svg"}
            alt={tool.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="text-2xl text-white font-bold mb-2">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              {tool.name}
            </a>
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm leading-relaxed">{tool.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center group"
          >
            Visit Tool
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SEOToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState<SEOTool[]>(seoTools)

  useEffect(() => {
    const filtered = seoTools.filter(
      (tool: SEOTool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredTools(filtered)
  }, [searchQuery])

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="min-h-screen bg-[#1d1d1d] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-4 text-white"
              >
                Free SEO Tools
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                A curated collection of free tools to improve your SEO strategy
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative max-w-2xl mx-auto"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search SEO tools..."
                  className="pl-10 bg-[#0a0a0a] border-gray-700 text-white placeholder-gray-500 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </motion.div>

            {filteredTools.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-16"
              >
                <p className="text-lg text-gray-400">No tools found matching your search.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

