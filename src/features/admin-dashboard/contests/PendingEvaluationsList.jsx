import { useEffect, useState } from 'react'
import { Code, ExternalLink } from 'lucide-react'
import { useSearch } from '../../../context/SearchContext'
import { fetchAllSubmissions } from '../../../api/admin.api'

export function PendingEvaluationsList() {
  const { searchQuery } = useSearch()
  const [pendingData, setPendingData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPendingEvaluations = async () => {
      try {
        const submissions = await fetchAllSubmissions()
        // Filter for pending submissions and map to the expected format
        const pendingSubmissions = submissions
          .filter(sub => sub.status === 'pending')
          .map(sub => ({
            student: sub.user?.name || 'Unknown Student',
            id: `#${sub._id.slice(-4)}`, // Use last 4 chars of submission ID
            contest: sub.contest?.title || 'Unknown Contest',
            date: new Date(sub.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            }),
            github: !!sub.githubLink,
            live: !!sub.liveLink,
            githubLink: sub.githubLink,
            liveLink: sub.liveLink,
            submissionId: sub._id,
            avatar: sub.user?.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(sub.user?.name || 'Unknown')}&background=0284c7&color=fff`
          }))
        setPendingData(pendingSubmissions)
      } catch (error) {
        console.error('Failed to load pending evaluations:', error)
        setPendingData([])
      } finally {
        setLoading(false)
      }
    }
    loadPendingEvaluations()
  }, [])

  const filteredData = pendingData.filter(row => {
    const student = row.student || ''
    const contest = row.contest || ''
    const query = (searchQuery || '').toLowerCase()
    return student.toLowerCase().includes(query) || contest.toLowerCase().includes(query)
  })

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[#e2e8d5] p-6 mt-8">
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#82C600]"></div>
          <span className="ml-3 text-gray-600">Loading pending evaluations...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#e2e8d5] p-6 mt-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Pending Evaluations</h3>
          <p className="text-[11px] font-medium text-gray-500 mt-1">Academic submissions requiring immediate attention</p>
        </div>
        <span className="bg-red-50 text-[#dc2626] text-[10px] font-extrabold px-3 py-1.5 rounded-full">
          {filteredData.length} Shown
        </span>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Student</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Contest</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Submitted On</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Submission Links</th>
              <th className="pb-3 pr-2 text-[9px] font-extrabold uppercase tracking-widest text-gray-400 text-right">Evaluate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500 font-bold text-sm">
                  No pending evaluations found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, i) => (
                <tr key={row.submissionId} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={row.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-100" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">{row.student}</div>
                        <div className="text-[9px] font-bold text-gray-400">ID: {row.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-semibold text-gray-800">{row.contest}</td>
                  <td className="py-4">
                    <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">{row.date}</div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      {row.github && (
                        <a href={row.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-[#82C600] hover:text-[#71ac00]">
                          <Code className="w-3 h-3" /> GitHub
                        </a>
                      )}
                      {row.live && (
                        <a href={row.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-amber-500 hover:text-amber-600">
                          <ExternalLink className="w-3 h-3" /> Live URL
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <button className="bg-[#82C600] hover:bg-[#71ac00] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors">
                      Evaluate
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <button className="w-full bg-white border-2 border-[#e4ebce] text-[#71ac00] font-extrabold text-[11px] uppercase tracking-widest py-3 rounded-xl hover:bg-[#f4f8eb] transition-colors">
        View All Submissions
      </button>
    </div>
  )
}
