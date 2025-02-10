"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ToolCard } from "@/components/toolcard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/seperator"
import { toast } from "@/components/ui/use-toast"
import type React from "react" // Added import for React




const inter = Inter({ subsets: ["latin"] })

const seoGuides = [
  {
    title: "B2B SEO Guide",
    description: "Master B2B SEO strategies to boost your business visibility online.",
    image: "/b2b.png",
    href: "/b2b-seo-guide",
    category: "SEO Guide",
  },
  {
    title: "Real Estate SEO Course",
    description: "Learn specialized SEO techniques for real estate websites and listings.",
    image: "/realestate.png",
    href: "/courses",
    category: "SEO Course",
  },
  {
    title: "Shopify SEO Techniques",
    description: "Optimize your Shopify store for better search engine rankings and visibility.",
    image: "/shopify.png",
    href: "/shopify",
    category: "E-commerce SEO",
  },
  {
    title: "Link Building Techniques",
    description: "Discover effective strategies to build high-quality backlinks for your website.",
    image: "/linkbuilding.png",
    href: "/link-building-techniques",
    category: "Link Building",
  },
]

const seoToolsAndResources = [
  {
    title: "SEO Audit",
    description: "Comprehensive SEO audit tool to identify and fix website issues.",
    image: "/audit.png",
    href: "/seo-audit",
    category: "Technical SEO",
  },
  {
    title: "SEO Checklist",
    description: "A complete checklist to ensure your website is fully optimized for search engines.",
    image: "/checklist.png",
    href: "/seo-checklist-free-guide",
    category: "SEO Guide",
  },
  {
    title: "SEO Glossary",
    description: "Comprehensive glossary of SEO terms and concepts for beginners and experts alike.",
    image: "/glossary.png",
    href: "/seo-glossary",
    category: "SEO Resource",
  },
  {
    title: "SEO Tools",
    description: "A collection of powerful SEO tools to boost your website's performance.",
    image: "/tools.png",
    href: "/seo-tools",
    category: "SEO Tools",
  },
]

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your email has been submitted successfully. You've been subscribed to our weekly SEO tips.",
        })
        setEmail("")
      } else {
        throw new Error("Subscription failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`flex min-h-screen bg-[#0F0F10] ${inter.className}`}>
      <Sidebar />
      <main className="flex-1 pl-0 md:pl-[60px] transition-all duration-300 group-hover/sidebar:pl-[240px]">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <section className="relative overflow-hidden flex min-h-[400px] md:min-h-[500px] flex-col items-center justify-center px-4 md:px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative space-y-2 text-center"
            >
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white backdrop-blur-sm">
                <Sparkles className="mr-2 h-3 w-3" />
                New Content Added Weekly
              </Badge>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative text-center text-3xl md:text-5xl font-bold tracking-tight text-white lg:text-6xl"
              >
                Free SEO Tools & Resources
                <br />
                to Boost Your Rankings
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mx-auto mt-8 w-full max-w-xl px-4 md:px-0"
            >
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter email for SEO tips"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/10 text-base md:text-lg text-white placeholder:text-white/60 w-full md:w-auto"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-orange-500 hover:bg-orange-600 transition-all duration-300 w-full md:w-auto mt-2 md:mt-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-2 text-center text-sm text-white/80">
                Join 50,000+ SEO professionals getting free updates
              </p>
            </motion.div>
          </section>

          <Separator className="my-8 bg-white/10" />

          {/* SEO Guides Section */}
          <section className="px-4 md:px-6 py-12">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">SEO Guides</h2>
              <p className="text-base md:text-lg text-white/80">
                Comprehensive guides to master various aspects of SEO
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {seoGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ToolCard {...guide} />
                </motion.div>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-white/10" />

          {/* SEO Tools & Resources Section */}
          <section className="px-4 md:px-6 py-12">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">SEO Tools & Resources</h2>
              <p className="text-base md:text-lg text-white/80">
                Powerful tools and resources to enhance your SEO strategy
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {seoToolsAndResources.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ToolCard {...tool} />
                </motion.div>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-white/10" />

          {/* Pricing Section */}
          <section className="px-4 md:px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="border-4 border-orange-500 rounded-2xl px-4 md:px-8 py-8 md:py-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Looking for pricing?</h2>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/80">
                  Everything is <span className="font-bold text-orange-500">100% FREE</span>
                </p>
                <p className="mt-4 text-lg md:text-xl text-white/60">No hidden fees. No credit card required.</p>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="px-4 md:px-6 py-8 md:py-12 text-center text-white/60">
            <p>&copy; 2025 SEO Tools & Resources. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

