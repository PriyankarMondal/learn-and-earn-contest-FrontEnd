const filters = [
  { label: 'All', active: true },
  { label: 'Not Submitted', active: false },
  { label: 'Pending', active: false },
  { label: 'Graded', active: false },
  { label: 'Winners', active: false },
]

export function ContestFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={`flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
            filter.active
              ? 'bg-[#82c600] text-white shadow-sm'
              : 'bg-[#e4ebce] text-gray-600 hover:bg-[#d6e0b7] hover:text-[#446611]'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
