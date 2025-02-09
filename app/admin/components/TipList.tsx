import type React from "react"
import type { SeoTip } from "@/types/seo-tip"
import { Button } from "@/components/ui/button"

interface TipListProps {
  tips: SeoTip[]
  onEdit: (tip: SeoTip) => void
  onDelete: (id: string) => void
}

export const TipList: React.FC<TipListProps> = ({ tips, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {tips.map((tip) => (
        <div key={tip.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div>
            <h3 className="text-lg font-semibold">{tip.title}</h3>
            <p className="text-sm text-gray-500">{new Date(tip.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <Button onClick={() => onEdit(tip)} className="mr-2">
              Edit
            </Button>
            <Button onClick={() => onDelete(tip.id)} variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

