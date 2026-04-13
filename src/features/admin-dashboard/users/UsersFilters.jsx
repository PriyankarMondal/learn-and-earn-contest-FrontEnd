import { Search, Filter } from 'lucide-react'
import { useSearch } from '../../../context/SearchContext'

export function UsersFilters() {
  const { searchQuery, setSearchQuery } = useSearch()

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, email or ID..."
          className="w-full rounded-xl border border-transparent bg-white py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 shadow-sm outline-none transition-all placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-hover hover:bg-gray-50 border border-transparent">
        <Filter className="h-4 w-4 text-gray-400" />
        <span className="text-gray-500">Filter</span>
      </button>

      {/* Entry Summary */}
      <div className="ml-auto text-right">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Records match system query</span>
      </div>
    </div>
  )
}
