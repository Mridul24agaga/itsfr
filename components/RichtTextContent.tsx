import type React from "react"

interface RichTextContentProps {
  content: string
}

export const RichTextContent: React.FC<RichTextContentProps> = ({ content }) => {
  return <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: content }} />
}

