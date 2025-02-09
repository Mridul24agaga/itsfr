"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Users, Star, Award, Check, Zap, Target, BarChart3 } from "lucide-react"
import type React from "react" // Added import for React
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

function Hero() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !name) {
      toast({
        title: "Error",
        description: "Please enter both your email and name.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      if (response.ok) {
        router.push("/checklist")
      } else {
        throw new Error("Subscription failed")
      }
    } catch (error) {
      console.error("Error:", error)
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
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            className="flex items-center gap-2 text-[#1d1d1d] bg-[#1d1d1d] "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-orange-500 fill-current" />
            <span className="text-sm font-medium text-white">Trusted by 2,000+ SEO professionals</span>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Get this Free Technical SEO Audit checklist
            </h1>
            <p className="text-xl text-gray-400">So that you can create and sell better audits. Easier.</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 items-center text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>2,000+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 max-w-md bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="space-y-2">
              <p className="text-white font-medium">Get instant access</p>
              <p className="text-sm text-gray-400">
                Join 2,000+ SEO professionals who are already using this checklist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 h-12"
              />
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/10 border-white/20 h-12"
              />
              <Button
                type="submit"
                className="w-full h-12 bg-[#1d1d1d] hover:bg-[#2a2a2a] transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Free Access
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute inset-0 bg-[#1d1d1d] rounded-2xl" />
          <div className="relative p-2 rounded-2xl border border-white/10">
            <Image
              src="/free.jpeg"
              alt="Technical SEO Audit Checklist Preview"
              width={600}
              height={800}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500 fill-current" />
                <Star className="w-5 h-5 text-orange-500 fill-current" />
                <Star className="w-5 h-5 text-orange-500 fill-current" />
                <Star className="w-5 h-5 text-orange-500 fill-current" />
                <Star className="w-5 h-5 text-orange-500 fill-current" />
              </div>
              <p className="text-white mt-2">"Game-changing checklist!"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Do audits faster",
      description: "There's no need to reinvent a wheel or waste time on trying to figure out everything from scratch.",
    },
    {
      icon: Target,
      title: "Audit big websites without overwhelm",
      description: "You'll get a secret to auditing websites with thousands or even millions of pages easily.",
    },
    {
      icon: BarChart3,
      title: "Prioritize your SEO recommendations",
      description:
        "Prioritization is key if you want your recommendations to be implemented. You'll get pointers on how to do it in the checklist.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
            How will this free Technical SEO Audit checklist help you?
          </h2>
          <p className="text-gray-600 text-lg">
            Get everything you need to perform professional SEO audits and improve your clients' websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group text-black p-8 rounded-2xl border border-gray-200 hover:border-[#1d1d1d] transition-all duration-200 hover:shadow-xl hover:shadow-[#1d1d1d]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1d1d1d]/10 text-[#1d1d1d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    "Indexability",
    "Crawlability",
    "Internal linking",
    "Page Experience",
    "Page speed",
    "Core Web Vitals",
    "Javascript SEO",
    "eCommerce checks",
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#1d1d1d]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d1d] to-[#2a2a2a]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Over 90 points to check, including:</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to perform comprehensive technical SEO audits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-white font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      text: "Wow, this SEO audit checklist is an absolute game-changer! Your experience and expertise shine through in how efficient and effective it is.",
      author: "Sarah Johnson",
      role: "SEO Consultant",
    },
    {
      text: "I love how detailed this is! SEO experts can only go into so much depth with their content here. Thanks for sharing a more comprehensive checklist.",
      author: "Michael Chen",
      role: "Digital Marketing Manager",
    },
    {
      text: "This checklist is exactly what I needed to streamline my audits and boost productivity. The prioritization tips for developers are pure gold!",
      author: "Emma Thompson",
      role: "Freelance SEO Specialist",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-black">Loved by SEO professionals</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied SEO professionals who are using our checklist
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 text-black hover:border-[#1d1d1d] transition-all duration-200 hover:shadow-xl hover:shadow-[#1d1d1d]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center">
                  <span className="text-white font-medium">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1d1d1d] to-[#2a2a2a]">
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="text-white font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1d1d1d] rounded-lg flex items-center justify-center">
            <span className="text-white">SEO</span>
          </div>
          Tech SEO Pro
        </div>
      </header>
      <main className="relative z-10">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none h-32 -top-32" />
          <Testimonials />
          <Benefits />
          <Features />
        </div>
      </main>
    </div>
  )
}

