"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", icon: Home, label: "Dashboard" },
  { href: "/admin/analytics", icon: BarChart, label: "Analytics" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <Card className="w-64 h-full bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  "text-gray-700 hover:text-primary hover:bg-primary/10",
                  pathname === item.href && "bg-primary/10 text-primary font-medium",
                )}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start space-x-2">
          <LogOut size={20} />
          <span>Logout</span>
        </Button>
      </div>
    </Card>
  )
}

