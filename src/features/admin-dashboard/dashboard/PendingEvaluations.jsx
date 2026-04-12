import { useState, useEffect } from 'react'
import { AlertCircle, Code, ExternalLink, ScrollText, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function PendingEvaluations() {
  const [evaluations, setEvaluations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const all = await apiRequest('/admin/v1/all-submissions')
        const pendingOnly = all.filter(s => s.status === 'pending')
        setEvaluations(pendingOnly.slice(0, 5)) // Show top 5 on dash
      } catch (err) {
        console.error('Failed to fetch pending evals:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPending()
  }, [])

  if (loading) {
     return (
       <div className="bg-[#f4f8eb] rounded-xl border border-gray-100/50 p-6 flex items-center justify-center h-64">
         <Loader2 className="w-6 h-6 animate-spin text-lime-600" />
       </div>
     )
  }

  return (
    <div className="bg-[#f4f8eb] rounded-xl shadow-sm border border-gray-100/50 p-6 overflow-hidden text-left h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-gray-900">
           <AlertCircle className="w-4 h-4 text-red-500" />
           Pending Evaluations ({evaluations.length})
        </h3>
        {evaluations.length > 0 && (
          <span className="bg-red-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
            Action Items
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Student Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Github Link</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {evaluations.map((row) => (
              <tr key={row._id} className="hover:bg-gray-50/50 group transition-colors">
                <td className="py-4 pr-4">
                  <div className="font-bold text-gray-900 text-sm truncate max-w-[150px]">{row.contest?.title || 'Unknown'}</div>
                </td>
                <td className="py-4">
                  <span className="text-sm font-semibold text-gray-800">{row.user?.name}</span>
                </td>
                <td className="py-4">
                   <a href={row.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg transition-colors border border-amber-200">
                     <Code className="w-3.5 h-3.5" /> Repo
                   </a>
                </td>
                <td className="py-4 text-center">
                  <a href="/admin/submissions" className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-white text-gray-400 hover:bg-amber-400 hover:text-gray-900 transition-colors border border-gray-100 hover:border-amber-500/20 shadow-sm">
                    <ScrollText className="w-4 h-4" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {evaluations.length === 0 && (
          <div className="py-12 text-center text-gray-400 font-bold text-sm bg-white/50 rounded-xl mt-4">
            No pending evaluations. Good job!
          </div>
        )}
      </div>
    </div>
  )
}
