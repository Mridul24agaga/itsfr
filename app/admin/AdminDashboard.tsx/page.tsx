"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AdminDashboard() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errorMessage, setErrorMessage] = useState("") // Added state for error messages
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    try {
      const { data, error } = await supabase.rpc("insert_seo_tip", { p_title: title, p_content: content })

      if (error) {
        console.error("Detailed error:", JSON.stringify(error, null, 2))
        setErrorMessage(`Error adding SEO tip: ${error.message}`)
      } else {
        console.log("SEO tip added successfully:", data)
        setTitle("")
        setContent("")
        router.refresh()
      }
    } catch (err) {
      console.error("Unexpected error:", err)
      setErrorMessage(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add SEO Tip
        </button>
      </form>
    </div>
  )
}

