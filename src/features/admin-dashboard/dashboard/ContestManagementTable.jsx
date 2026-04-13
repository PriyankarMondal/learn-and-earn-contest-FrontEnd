import { useState, useEffect } from 'react'
import { Plus, LayoutTemplate, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function ContestManagementTable({ onCreateContest }) {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContests = async () => {
      try {
        const data = await apiRequest('/student/v1/contests')
        setContests(data)
      } catch (error) {
        console.error('Failed to load contests:', error)
      } finally {
        setLoading(false)
      }
    }
    loadContests()
  }, [])

  if (loading) {
    return (
      <div className="mb-10 bg-[#f4f8eb] rounded-xl border border-gray-100/50 p-12 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#82C600] animate-spin" />
      </div>
    )
  }
  return (
    <div className="mb-10 bg-[#f4f8eb] rounded-xl shadow-sm border border-gray-100/50 p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-gray-900">
           <LayoutTemplate className="w-4 h-4 text-[#82C600]" />
           Active Contest Management
        </h3>
        <button 
          onClick={onCreateContest}
          className="flex items-center gap-1.5 bg-[#82C600] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#71ac00] transition-all active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          Create New Contest
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Difficulty</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Deadline</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hidden lg:table-cell">Participants</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hidden sm:table-cell">Submissions</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {contests.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-10 text-center text-gray-400 font-medium">No contests found. Create your first challenge!</td>
              </tr>
            ) : (
              contests.map((row) => (
                <tr key={row._id} className="hover:bg-gray-50/50 group transition-colors text-left">
                  <td className="py-4 pr-4">
                    <div className="font-bold text-gray-900 text-sm group-hover:text-[#446611] transition-colors">{row.title}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{row.category}</div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold tracking-widest bg-lime-50 text-lime-600`}>
                      {row.category}
                    </span>
                  </td>
                  <td className="py-4 text-xs font-semibold text-gray-600">{new Date(row.endDate).toLocaleDateString()}</td>
                  <td className="py-4 text-sm font-bold text-gray-900 hidden lg:table-cell">{row.participantsCount || 0}</td>
                  <td className="py-4 text-sm font-bold text-gray-900 hidden sm:table-cell">0</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-widest ${row.status === 'running' ? 'bg-lime-100 text-lime-700' : 'bg-gray-100 text-gray-500'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}


