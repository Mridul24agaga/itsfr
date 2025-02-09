"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"

export default function StartupDirectories() {
  const directories = [
    {
      name: "Product Hunt",
      description: "The go-to platform for launching new products, massive exposure potential",
      link: "#",
    },
    {
      name: "Indie Hackers",
      description: "Highly engaged community of bootstrapped founders, great for feedback",
      link: "#",
    },
    {
      name: "Fazier",
      description: "Free directory for SaaS products and startups",
      link: "#",
    },
    {
      name: "SaaS Worthy",
      description: "Free directory for SaaS products and startups",
      link: "#",
    },
    {
      name: "Uneed",
      description: "Free startup and product directory focused on early-stage companies (this one has longer queues)",
      link: "#",
    },
    {
      name: "BetaList",
      description: "Platform for discovering and launching early-stage startups",
      link: "#",
    },
    {
      name: "Launching Today",
      description: "Free directory for startups and products",
      link: "#",
    },
    {
      name: "Launching Next",
      description: "Free directory for startups and products",
      link: "#",
    },
    {
      name: "Top Tool",
      description: "Free directory for SaaS products and startups",
      link: "#",
    },
    {
      name: "Pay Once Alternatives",
      description: "Directory focused on lifetime deal and one-time payment software",
      link: "#",
    },
    {
      name: "Once",
      description: "Another directory for one-time payment software",
      link: "#",
    },
    {
      name: "Afford Hunt",
      description: "Free directory but 1 month wait time",
      link: "#",
    },
  ]

  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="min-h-screen bg-[#1d1d1d] text-white font-sans">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="lg:grid lg:grid-cols-[300px,1fr] gap-8">
              {/* Sidebar */}
              <div className={`space-y-6 hidden lg:block ${isSticky ? "lg:sticky lg:top-8" : ""}`}>
                <Card className="bg-[#2d2d2d] border-gray-700 shadow-lg">
                  <CardHeader className="pb-3">
                    <h3 className="font-semibold text-lg text-white">Get SEO tips in your inbox</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#1d1d1d] border-gray-700 text-white placeholder:text-gray-500"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-150 ease-in-out">
                        Sign up for newsletter
                      </Button>
                      <p className="text-sm text-gray-400">Unsubscribe anytime.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="space-y-8 lg:mt-0">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2 ml-auto"></div>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  The Best 50 Free Directories for your Startup
                </h1>
                <p className="text-lg text-gray-300">
                  Submitting your startup to popular directories is a great way to gain domain authority
                </p>

                <section id="why-submit" className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">Why should I submit my Startup to directories?</h2>
                  <p className="text-gray-300">
                    Launching your startup in public directories is a great way to build more backlinks.
                  </p>
                  <p className="text-gray-300">
                    Backlinks are important because they show Google that your website is trustworthy and authoritative.
                  </p>
                  <p className="text-gray-300">
                    The more backlinks you have, the more likely Google will rank you higher.
                  </p>
                  <p className="text-gray-300">Simple.</p>
                </section>

                <section id="why-sharing" className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">Why are you sharing this?</h2>
                  <p className="text-gray-300">
                    It would've been helpful if I had a resource like this when I was launching my startup.
                  </p>
                  <p className="text-gray-300">
                    Most lists I came across were either outdated or only included paid directories.
                  </p>
                  <p className="text-gray-300">
                    These directories should all be free and with reasonable wait times. (or no wait times at all)
                  </p>
                  <p className="text-gray-300">Enjoy.</p>
                </section>

                <section id="directories" className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">Free Directories</h2>
                  <div className="rounded-lg border border-gray-700 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-700 hover:bg-[#2d2d2d]">
                          <TableHead className="text-gray-300">Name</TableHead>
                          <TableHead className="text-gray-300">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {directories.map((directory) => (
                          <TableRow key={directory.name} className="border-gray-700 hover:bg-[#2d2d2d]">
                            <TableCell className="font-medium text-white">
                              <a
                                href={directory.link}
                                className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out"
                              >
                                {directory.name}
                              </a>
                            </TableCell>
                            <TableCell className="text-gray-300">{directory.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

