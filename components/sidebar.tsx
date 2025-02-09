"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Search,
  Building2,
  PenToolIcon as Tools,
  HomeIcon,
  ShoppingBag,
  Briefcase,
  LinkIcon,
  Key,
  ClipboardCheck,
  FileText,
  BookOpen,
  Wrench,
} from "lucide-react"
import { Separator } from "@/components/ui/seperator"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react" // Import Menu icon

interface NavigationItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const navigation: NavigationSection[] = [
  {
    title: "SEO GUIDES",
    items: [
      { name: "B2B SEO Guide", icon: Building2, href: "/b2b-seo-guide" },
      { name: "Real Estate SEO Course", icon: HomeIcon, href: "/courses" },
      { name: "Shopify SEO Techniques", icon: ShoppingBag, href: "/shopify" },
      { name: "Link Building Techniques", icon: LinkIcon, href: "/link-building-techniques" },
      { name: "Secrets of SEO", icon: Key, href: "/secrets" },
    ],
  },
  {
    title: "SEO TOOLS & RESOURCES",
    items: [
      { name: "SEO Audit", icon: ClipboardCheck, href: "/seo-audit" },
      { name: "SEO Checklist", icon: FileText, href: "/seo-checklist-free-guide" },
      { name: "SEO Glossary", icon: BookOpen, href: "/seo-glossary" },
      { name: "SEO Tools", icon: Wrench, href: "/seo-tools" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { name: "Home", icon: Home, href: "/" },
      { name: "Startup Directories", icon: Briefcase, href: "/startup-directories" },
    ],
  },
]

function SidebarContent() {
  const pathname = usePathname()

  return (
    <>
      <div className="flex h-14 items-center px-3">
        <span className="w-full truncate text-sm font-medium text-white">SEO Tools & Guides</span>
      </div>
      <Separator className="w-[calc(100%-16px)] mx-auto bg-white/10" />
      <div className="flex-1 space-y-2 overflow-y-auto p-2">
        {navigation.map((section, index) => (
          <div key={section.title}>
            <div className="px-3 text-xs font-medium text-gray-400/70">
              <span>{section.title}</span>
            </div>
            <nav className="mt-2 space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative flex h-10 items-center rounded-lg px-3 text-sm font-medium",
                    "text-gray-300 transition-colors hover:bg-white/5 hover:text-white",
                    pathname === item.href && "bg-white/5 text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="ml-3 overflow-hidden">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </>
  )
}

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="group fixed left-0 top-0 z-[100] hidden md:flex h-screen w-[60px] flex-col bg-[#0a0a0a] transition-[width] duration-200 ease-out hover:w-[240px] border-r border-white/10">
        <div className="flex h-14 items-center px-3">
          <span className="w-full truncate text-sm font-medium text-white opacity-0 transition-all group-hover:opacity-100">
            SEO Tools & Guides
          </span>
        </div>
        <Separator className="w-[calc(100%-16px)] mx-auto bg-white/10" />
        <div className="flex-1 space-y-2 overflow-y-auto p-2">
          {navigation.map((section, index) => (
            <div key={section.title}>
              <div className="px-3 text-xs font-medium text-gray-400/70">
                <span className="hidden group-hover:inline">{section.title}</span>
              </div>
              <nav className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative flex h-10 items-center rounded-lg px-3 text-sm font-medium",
                      "text-gray-300 transition-colors hover:bg-white/5 hover:text-white",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="ml-3 overflow-hidden opacity-0 transition-all group-hover:opacity-100">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-[101] md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0 bg-[#0a0a0a]">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

