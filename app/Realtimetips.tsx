"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type SeoTip = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function RealtimeTips({ initialTips }: { initialTips: SeoTip[] }) {
  const [tips, setTips] = useState(initialTips)

  useEffect(() => {
    const channel = supabase
      .channel("realtime seo_tips")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "seo_tips" }, (payload) => {
        setTips((currentTips) => [payload.new as SeoTip, ...currentTips])
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <div className="space-y-6">
      {tips.map((tip) => (
        <div key={tip.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
          <p className="text-gray-600">{tip.content}</p>
          <p className="text-sm text-gray-400 mt-2">Posted on: {new Date(tip.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}

