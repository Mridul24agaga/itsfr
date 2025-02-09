"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { UploadButton } from "@uploadthing/react"
import type { OurFileRouter } from "../api/uploadthing/core"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Sidebar } from "./components/Sidebar"
import { AdminAuthWrapper } from "./components/admin-auth-wrapper"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TiptapImage from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import FontFamily from "@tiptap/extension-font-family"
import type { SeoTip } from "@/types/seo-tip"
import { TipList } from "./components/TipList"
import { FontSelector } from "./components/FontSelector"

export default function AdminDashboard() {
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [tips, setTips] = useState<SeoTip[]>([])
  const [editingTip, setEditingTip] = useState<SeoTip | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapImage,
      Link.configure({
        openOnClick: false,
      }),
      FontFamily.configure({
        types: ["textStyle"],
      }),
    ],
    content: "",
  })

  useEffect(() => {
    fetchTips()
  }, [])

  const fetchTips = async () => {
    const { data, error } = await supabase.from("seo_tips").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching tips:", error)
    } else {
      setTips(data)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { data, error } = await supabase.rpc("insert_seo_tip", {
        p_title: title,
        p_content: editor?.getHTML() || "",
        p_image_url: imageUrl,
      })

      if (error) throw error

      console.log("SEO tip added successfully:", data)
      setTitle("")
      editor?.commands.setContent("")
      setImageUrl(null)
      fetchTips()
      toast({
        title: "Success",
        description: "SEO tip added successfully",
      })
    } catch (err) {
      console.error("Error:", err)
      toast({
        title: "Error",
        description: `Error: ${err instanceof Error ? err.message : String(err)}`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (tip: SeoTip) => {
    setEditingTip(tip)
    setTitle(tip.title)
    editor?.commands.setContent(tip.content)
    setImageUrl(tip.image_url || null)
  }

  const handleUpdate = async () => {
    if (!editingTip) return

    setIsLoading(true)

    try {
      const { data, error } = await supabase
        .from("seo_tips")
        .update({
          title: title,
          content: editor?.getHTML() || "",
          image_url: imageUrl,
        })
        .eq("id", editingTip.id)

      if (error) throw error

      console.log("SEO tip updated successfully:", data)
      setEditingTip(null)
      setTitle("")
      editor?.commands.setContent("")
      setImageUrl(null)
      fetchTips()
      toast({
        title: "Success",
        description: "SEO tip updated successfully",
      })
    } catch (err) {
      console.error("Error:", err)
      toast({
        title: "Error",
        description: `Error: ${err instanceof Error ? err.message : String(err)}`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("seo_tips").delete().eq("id", id)

      if (error) throw error

      fetchTips()
      toast({
        title: "Success",
        description: "SEO tip deleted successfully",
      })
    } catch (err) {
      console.error("Error:", err)
      toast({
        title: "Error",
        description: `Error: ${err instanceof Error ? err.message : String(err)}`,
        variant: "destructive",
      })
    }
  }

  const addImage = () => {
    const url = window.prompt("URL")
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }

  const addLink = () => {
    const url = window.prompt("URL")
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run()
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <Card>
              <CardHeader>
                <CardTitle>{editingTip ? "Edit SEO Tip" : "Add New SEO Tip"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={editingTip ? handleUpdate : handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                      Content
                    </label>
                    <div className="border rounded-md p-2">
                      <div className="mb-2 flex space-x-2">
                        <Button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleBold().run()}
                          className="p-1 h-8"
                        >
                          Bold
                        </Button>
                        <Button
                          type="button"
                          onClick={() => editor?.chain().focus().toggleItalic().run()}
                          className="p-1 h-8"
                        >
                          Italic
                        </Button>
                        <Button type="button" onClick={addImage} className="p-1 h-8">
                          Add Image
                        </Button>
                        <Button type="button" onClick={addLink} className="p-1 h-8">
                          Add Link
                        </Button>
                        <FontSelector editor={editor} />
                      </div>
                      <EditorContent editor={editor} className="min-h-[200px] prose max-w-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Featured Image</label>
                    <UploadButton<OurFileRouter, "imageUploader">
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res.length > 0) {
                          setImageUrl(res[0].url)
                          toast({
                            title: "Upload Complete",
                            description: "Image uploaded successfully",
                          })
                        }
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: "Upload Error",
                          description: `Error uploading: ${error.message}`,
                          variant: "destructive",
                        })
                      }}
                    />
                    {imageUrl && (
                      <div className="mt-2">
                        <Image
                          src={imageUrl || "/placeholder.svg"}
                          alt="Preview"
                          width={200}
                          height={200}
                          className="object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading
                      ? editingTip
                        ? "Updating..."
                        : "Adding..."
                      : editingTip
                        ? "Update SEO Tip"
                        : "Add SEO Tip"}
                  </Button>
                  {editingTip && (
                    <Button type="button" onClick={() => setEditingTip(null)} variant="outline">
                      Cancel Edit
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>All SEO Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <TipList tips={tips} onEdit={handleEdit} onDelete={handleDelete} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminAuthWrapper>
  )
}

