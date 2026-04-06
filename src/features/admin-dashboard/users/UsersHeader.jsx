import { Download, Plus } from 'lucide-react'

export function UsersHeader() {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">User Management</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Orchestrate your institution's academic access and administrative roles.</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 rounded-xl bg-[#e4e9d3] px-5 py-3 text-sm font-bold text-gray-700 hover:bg-[#d6e0b7] transition-colors border border-transparent shadow-sm">
          <Download className="h-4 w-4" />
          Export Directory
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-[#82c600] px-5 py-3 text-sm font-bold text-white hover:bg-[#71ac00] shadow-sm transition-colors ring-1 ring-[#71ac00]/20">
          <Plus className="h-4 w-4" />
          New Student
        </button>
      </div>
    </div>
  )
}
