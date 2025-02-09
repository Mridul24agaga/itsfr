"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFDownloadButtonProps {
  fileName: string
  fileSize: string
  url: string
}

export function PDFDownloadButton({ fileName, fileSize, url }: PDFDownloadButtonProps) {
  return (
    <Button
      variant="secondary"
      className="w-full bg-purple-900/50 hover:bg-purple-900/70 text-white flex items-center justify-between group transition-all"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex items-center">
        <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        <span>{fileName}</span>
      </div>
      <span className="text-sm text-gray-400">{fileSize}</span>
    </Button>
  )
}

