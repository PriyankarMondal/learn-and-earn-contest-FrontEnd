import { ListFilter, ArrowDownWideNarrow } from 'lucide-react'

export function SubmissionsHeader({ count = 0 }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#82C600] mb-1">
          Academic Portfolio
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          My Submissions ({count})
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg bg-[#f0f6e6] px-4 py-2 text-[11px] font-bold text-gray-600 transition-colors hover:bg-[#e4ebce] hover:text-[#446611]">
          <ListFilter className="h-3.5 w-3.5" />
          All Statuses
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-[#f0f6e6] px-4 py-2 text-[11px] font-bold text-gray-600 transition-colors hover:bg-[#e4ebce] hover:text-[#446611]">
          <ArrowDownWideNarrow className="h-3.5 w-3.5" />
          Latest First
        </button>
      </div>
    </div>
  )
}

