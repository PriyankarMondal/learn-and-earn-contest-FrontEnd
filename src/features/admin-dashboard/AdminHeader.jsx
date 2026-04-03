import { Download, Plus } from 'lucide-react'

export function AdminHeader() {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Command Center</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Real-time academic performance & metrics.</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm transition-colors">
          <Download className="h-4 w-4" />
          Export SRS
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-[#82c600] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#71ac00] shadow-sm transition-colors">
          <Plus className="h-4 w-4" />
          Create New Contest
        </button>
      </div>
    </div>
  )
}
