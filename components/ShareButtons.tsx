"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    }

    window.open(shareUrls[platform], "_blank")
  }

  return (
    <div className="flex flex-col space-y-2">
      <Button
        variant="outline"
        className="w-full justify-start bg-[#1d1d1d] hover:bg-[#2d2d2d] text-white border-gray-700"
        onClick={() => handleShare("twitter")}
      >
        <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
      </Button>
      <Button
        variant="outline"
        className="w-full justify-start bg-[#1d1d1d] hover:bg-[#2d2d2d] text-white border-gray-700"
        onClick={() => handleShare("facebook")}
      >
        <Facebook className="mr-2 h-4 w-4" /> Share on Facebook
      </Button>
      <Button
        variant="outline"
        className="w-full justify-start bg-[#1d1d1d] hover:bg-[#2d2d2d] text-white border-gray-700"
        onClick={() => handleShare("linkedin")}
      >
        <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
      </Button>
    </div>
  )
}

