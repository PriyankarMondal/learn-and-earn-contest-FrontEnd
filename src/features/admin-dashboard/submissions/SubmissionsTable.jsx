import { useState, useEffect } from 'react'
import { Code, ExternalLink, Eye, ChevronLeft, ChevronRight, Loader2, Star } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function SubmissionsTable() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isScoring, setIsScoring] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [scoreValue, setScoreValue] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const data = await apiRequest('/admin/v1/all-submissions')
      setSubmissions(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleScoreSubmit = async () => {
    if (!scoreValue || !selectedSubmission) return
    
    try {
      setIsScoring(true)
      await apiRequest('/admin/v1/score', 'POST', {
        submissionId: selectedSubmission._id,
        score: Number(scoreValue)
      })
      alert('Score updated successfully!')
      setSelectedSubmission(null)
      setScoreValue('')
      fetchSubmissions() // Refresh list
    } catch (err) {
      alert(err.message)
    } finally {
      setIsScoring(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Loader2 className="h-8 w-8 animate-spin text-lime-600" />
      </div>
    )
  }

  return (
    <div className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Student Name</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Submitted Date</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Links</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {submissions.map((sub) => (
              <tr key={sub._id} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${sub.user?.name || 'User'}&background=446611&color=fff`} 
                      alt="Avatar" 
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                    />
                    <div>
                      <div className="text-sm font-bold text-gray-900 leading-tight">{sub.user?.name || 'Deleted User'}</div>
                      <div className="text-[10px] font-bold text-gray-400">{sub.user?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4 text-xs font-bold text-gray-700">{sub.contest?.title || 'Unknown Contest'}</td>
                <td className="py-5 px-4 text-xs font-semibold text-gray-500 whitespace-nowrap">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    <a href={sub.githubLink} target="_blank" rel="noreferrer">
                       <Code className="h-4 w-4 text-lime-600 hover:text-lime-700 cursor-pointer" />
                    </a>
                    <a href={sub.liveLink} target="_blank" rel="noreferrer">
                       <ExternalLink className="h-4 w-4 text-lime-600 hover:text-lime-700 cursor-pointer" />
                    </a>
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    sub.status === 'pending' ? 'bg-red-50 text-red-600' : 'bg-lime-100 text-lime-700'
                  }`}>
                    {sub.status === 'pending' ? 'PENDING' : `REVIEWED (${sub.score})`}
                  </span>
                </td>
                <td className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button 
                      onClick={() => setSelectedSubmission(sub)}
                      className="bg-amber-400 hover:bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors"
                    >
                      {sub.status === 'pending' ? 'Evaluate' : 'Edit Score'}
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {submissions.length === 0 && (
        <div className="py-12 text-center text-gray-500 font-bold text-sm">
          No submissions found yet.
        </div>
      )}

      {/* Pagination Style Footer (Static for now) */}
      <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          Showing {submissions.length} results
        </span>
      </div>

      {/* Score Modal Overlay */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl border border-gray-100">
            <h3 className="text-xl font-black text-gray-900 mb-2">Evaluate Submission</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Evaluation for {selectedSubmission.user?.name}
            </p>
            
            <label className="text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2 block">Assign Score (0-100)</label>
            <input 
              type="number"
              min="0"
              max="100"
              value={scoreValue}
              onChange={(e) => setScoreValue(e.target.value)}
              placeholder="e.g. 85"
              className="w-full px-5 py-3 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold mb-6"
            />

            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleScoreSubmit}
                disabled={isScoring}
                className="flex-1 py-3 bg-[#82C600] hover:bg-[#71ac00] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-lime-200 transition-all flex items-center justify-center gap-2"
              >
                {isScoring && <Loader2 className="w-3 h-3 animate-spin" />}
                Submit Score
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
