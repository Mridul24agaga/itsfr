import { Button } from "@/components/ui/button"
import { CheckCircle, Circle } from "lucide-react"

interface Section {
  id: string
  title: string
}

interface TableOfContentsProps {
  sections: Section[]
  currentSection: string
  onSectionChange: (id: string) => void
}

export function TableOfContents({ sections, currentSection, onSectionChange }: TableOfContentsProps) {
  return (
    <nav className="mb-8">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Course Sections</h2>
      <ul className="space-y-2 text-sm sm:text-base">
        {sections.map((section, index) => (
          <li key={section.id} className="flex items-center">
            <Button
              variant="ghost"
              className="text-left w-full justify-start"
              onClick={() => onSectionChange(section.id)}
            >
              {currentSection === section.id ? (
                <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
              ) : (
                <Circle className="mr-2 h-4 w-4" />
              )}
              {index + 1}. {section.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

