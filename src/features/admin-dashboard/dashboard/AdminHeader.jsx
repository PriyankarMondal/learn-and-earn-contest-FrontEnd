import { Download, Plus } from 'lucide-react'

export function AdminHeader({ onCreateContest }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Command Center</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Real-time academic performance & metrics.</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 rounded-full bg-[#e4e9d3] px-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-[#d6e0b7] transition-colors">
          <Download className="h-4 w-4" />
          Export SRS
        </button>
        <button 
          onClick={onCreateContest}
          className="flex items-center gap-2 rounded-full bg-[#82C600] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#71ac00] shadow-sm transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" />
          Create New Contest
        </button>
      </div>
    </div>
  )
}

