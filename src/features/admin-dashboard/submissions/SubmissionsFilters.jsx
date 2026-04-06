import { Search, ChevronDown, Filter, RotateCcw } from 'lucide-react'

export function SubmissionsFilters() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search student name..."
          className="w-full rounded-xl border border-transparent bg-white py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 shadow-sm outline-none transition-all placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-4 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-hover hover:bg-gray-50 border border-transparent">
          <span className="text-gray-500">All Contests</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>

        <button className="flex items-center gap-4 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-hover hover:bg-gray-50 border border-transparent">
          <span className="text-gray-500">All Statuses</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors text-gray-600">
          <Filter className="h-5 w-5" />
        </button>
        <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors text-gray-600">
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
