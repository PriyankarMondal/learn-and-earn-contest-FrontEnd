import { Download } from 'lucide-react'

export function SubmissionsHeader() {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Submissions Management</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Review and evaluate student project entries across all active contests.</p>
      </div>
      <button className="flex items-center gap-2 rounded-xl bg-[#e4e9d3] px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-[#d6e0b7] transition-colors border border-[#d6e0b7]">
        <Download className="h-4 w-4" />
        Export Report
      </button>
    </div>
  )
}
