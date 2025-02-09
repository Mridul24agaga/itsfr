import type React from "react"
import type { Editor } from "@tiptap/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FontSelectorProps {
  editor: Editor | null
}

const fonts = [
  { name: "Default", value: "sans-serif" },
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Helvetica", value: "Helvetica, sans-serif" },
  { name: "Times New Roman", value: "Times New Roman, serif" },
  { name: "Courier New", value: "Courier New, monospace" },
]

export const FontSelector: React.FC<FontSelectorProps> = ({ editor }) => {
  const setFont = (font: string) => {
    editor?.chain().focus().setFontFamily(font).run()
  }

  return (
    <Select onValueChange={setFont}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select font" />
      </SelectTrigger>
      <SelectContent>
        {fonts.map((font) => (
          <SelectItem key={font.value} value={font.value}>
            {font.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

