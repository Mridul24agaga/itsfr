import Sidebar from "@/components/coursesidebar"

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-[#1A1A1A]">
      <Sidebar />
      <main className="flex-grow w-full sm:ml-80">{children}</main>
    </div>
  )
}

