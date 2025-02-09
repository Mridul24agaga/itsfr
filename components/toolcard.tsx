import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import type React from "react" // Import React

interface ToolCardProps {
  title: string
  description: string
  image: string
  href: string
  category: string
  isFree?: boolean
  isNew?: boolean
  icon?: React.ReactNode
}

export function ToolCard({ title, description, image, href, category, isFree, isNew, icon }: ToolCardProps) {
  return (
    <Card className="overflow-hidden bg-white/[0.05] border-white/10 transition-all hover:border-orange-500/50 hover:shadow-orange-500/10 hover:shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
            {category}
          </Badge>
          {isFree && (
            <Badge variant="secondary" className="bg-green-500/10 text-green-500">
              Free
            </Badge>
          )}
          {isNew && (
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
              New
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold mb-2 text-white flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <p className="text-white/70">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <a href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

