"use client"

import Link from "next/link"
import React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

const modules = [
  {
    title: "MODULE 1: INTRODUCTION TO SEO",
    items: [
      { title: "What is SEO and why it matters for real estate agents", href: "/courses/" },
      { title: "Understanding How Search Engines Work", href: "/courses/search-engine" },
      { title: "The Importance of SEO in the Competitive Real Estate Industry", href: "/courses/importance" },
      { title: "Key SEO Terminology for Beginners", href: "/courses/terminology" },
    ],
  },
  {
    title: "MODULE 2: KEYWORD RESEARCH",
    items: [
      {
        title: "Understanding Keywords",
        href: "/courses/understanding-keywords",
        subitems: [
          { title: "Long-Tail vs. Short-Tail Keywords", href: "/courses/understanding-keywords/keyword-types" },
          { title: "Buyer Intent Keywords", href: "/courses/understanding-keywords/buyer-intent" },
        ],
      },
      {
        title: "How to Conduct Keyword Research",
        href: "/courses/keyword-research",
        subitems: [
          { title: "Free Tools for Keyword Research", href: "/courses/keyword-research/tools" },
          { title: "Paid Tools for Keyword Research", href: "/courses/keyword-research/analysis" },
        ],
      },
      {
        title: "How to Choose the Right Keywords for Real Estate",
        href: "/courses/choosing-keywords",
        subitems: [
          { title: "Geographic Keywords (City, Neighborhood)", href: "/courses/choosing-keywords/local-seo" },
          { title: "Property Types and Features", href: "/courses/choosing-keywords/property-types" },
        ],
      },
      {
        title: "Practical Exercise: Create a Seed List of Keywords Using a Free Tool",
        href: "/courses/keyword-exercise",
      },
    ],
  },
  {
    title: "MODULE 3: ON-PAGE SEO",
    items: [
      {
        title: "Title Tags and Meta Descriptions",
        href: "/courses/title-tags",
        subitems: [
          { title: "Writing Effective Titles and Meta Descriptions", href: "/courses/title-tags/writing-effective" },
          { title: "Examples from Successful Real Estate Websites", href: "/courses/title-tags/examples" },
        ],
      },
      {
        title: "Content Creation and Optimization",
        href: "/courses/content-optimization",
        subitems: [
          { title: "Creating High-Quality, Useful Content", href: "/courses/content-optimization/quality-content" },
          { title: "Incorporating Keywords Naturally", href: "/courses/content-optimization/incorporating-keywords" },
        ],
      },
      {
        title: "Image Optimization",
        href: "/courses/image-optimization",
        subitems: [
          { title: "Using Alt Text for SEO", href: "/courses/image-optimization/alt-text" },
          { title: "Image Sizing and Loading Times", href: "/courses/image-optimization/sizing-loading" },
        ],
      },
      { title: "Practical Exercise: Optimize an Existing Blog Article for SEO", href: "/courses/blog-optimization" },
    ],
  },
  {
    title: "MODULE 4: LOCAL SEO STRATEGIES",
    items: [
      {
        title: "Importance of Citations and NAP Consistency",
        href: "/courses/citations",
        subitems: [
          { title: "Auditing Your Online Information", href: "/courses/citations/audit" },
          { title: "Best Places to List Your Business", href: "/courses/citations/directories" },
        ],
      },
      {
        title: "Gathering and Managing Online Reviews",
        href: "/courses/reviews",
        subitems: [
          { title: "Encouraging Clients to Leave Positive Reviews", href: "/courses/reviews/encouraging" },
          { title: "Responding to Reviews Effectively", href: "/courses/reviews/responding" },
        ],
      },
      {
        title: "Local Link Building Strategies",
        href: "/courses/local-links",
        subitems: [
          { title: "Partnering with Local Businesses", href: "/courses/local-links/partnerships" },
          { title: "Using Local News and Community Boards", href: "/courses/local-links/news" },
        ],
      },
      {
        title: "Practical Exercise: Submit Your Business to 3 Online Directories",
        href: "/courses/directory-submission",
      },
    ],
  },
  {
    title: "MODULE 5: TECHNICAL SEO BASICS",
    items: [
      {
        title: "Ensuring Mobile-Friendliness",
        href: "/courses/mobile-friendly",
        subitems: [
          { title: "Tools to Test Mobile Usability", href: "/courses/mobile-friendly/testing-tools" },
          { title: "Quick Fixes for Common Mobile Usability Issues", href: "/courses/mobile-friendly/quick-fixes" },
        ],
      },
      { title: "Improving Website Speed (Basics and Easy Fixes)", href: "/courses/website-speed" },
      {
        title: "Practical Exercise: Run a Basic Technical SEO Audit Using Free Tools",
        href: "/courses/technical-audit",
      },
    ],
  },
  {
    title: "MODULE 6: CONTENT MARKETING FOR REAL ESTATE",
    items: [
      {
        title: "Blogging for SEO",
        href: "/courses/blogging",
        subitems: [
          { title: "Topics that Attract Potential Buyers and Sellers", href: "/courses/blogging/topics" },
          { title: "Scheduling and Content Consistency", href: "/courses/blogging/scheduling" },
        ],
      },
      {
        title: "Video Marketing for Real Estate",
        href: "/courses/video-marketing",
        subitems: [{ title: "SEO Best Practices for YouTube", href: "/courses/video-marketing/youtube-seo" }],
      },
    ],
  },
  {
    title: "MODULE 7: MEASURING SUCCESS",
    items: [
      { title: "Using Google Analytics", href: "/courses/google-analytics" },
      { title: "Google Search Console", href: "/courses/search-console" },
      { title: "Reporting and Adjusting Your Strategy", href: "/courses/reporting" },
    ],
  },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({})

  const toggleExpand = (itemPath: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemPath]: !prev[itemPath],
    }))
  }

  return (
    <div className="hidden sm:block w-80 h-screen bg-[#1A1A1A] border-r border-gray-800 overflow-hidden fixed">
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-8">
          {modules.map((module, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-sm font-bold text-gray-200 uppercase tracking-wider">{module.title}</h2>
              <nav className="space-y-2">
                {module.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-1">
                    <div className="flex items-center">
                      {item.subitems ? (
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.href}
                              className="flex-grow text-[15px] text-gray-400 hover:text-white py-2 px-3 rounded-l transition-colors duration-200 hover:bg-gray-800"
                            >
                              {item.title}
                            </Link>
                            <button
                              onClick={() => toggleExpand(item.href)}
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-r"
                            >
                              {expandedItems[item.href] ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                          {expandedItems[item.href] && (
                            <div className="ml-4 space-y-1 border-l border-gray-800">
                              {item.subitems.map((subitem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subitem.href}
                                  className="block text-[14px] text-gray-400 hover:text-white py-2 pl-4 rounded transition-colors duration-200 hover:bg-gray-800"
                                >
                                  {subitem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block w-full text-[15px] text-gray-400 hover:text-white py-2 px-3 rounded transition-colors duration-200 hover:bg-gray-800"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4a4a4a #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a4a4a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #5a5a5a;
        }
      `}</style>
    </div>
  )
}

