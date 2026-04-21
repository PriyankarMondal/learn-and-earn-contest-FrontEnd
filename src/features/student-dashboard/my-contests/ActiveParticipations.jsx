import { useState, useEffect } from 'react'
import { ArrowRight, Code2, Palette, Loader2, CheckCircle2, Trophy, Clock } from 'lucide-react'
import { SubmissionForm } from '../all-contests/SubmissionForm'
import { apiRequest } from '../../../api/fetch'
import { useParticipationRefresh } from '../../../context/ParticipationRefreshContext'

export function ActiveParticipations() {
  const [participations, setParticipations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedForSubmission, setSelectedForSubmission] = useState(null)
  const { refreshTrigger } = useParticipationRefresh()

  useEffect(() => {
    fetchParticipations()
  }, [refreshTrigger])  // 🔥 Re-fetch when refresh is triggered

  const fetchParticipations = async () => {
    try {
      setLoading(true)
      const data = await apiRequest('/student/v1/my-participations')
      setParticipations(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#82C600]" />
      </div>
    )
  }

  return (
    <div className="mb-12 mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-amber-400"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight text-left">My Participations</h2>
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          {participations.length} Contests
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {participations.map((part) => {
          const contest = part.contest
          const isSubmitted = part.submitted
          const hasScore = part.score !== null

          return (
            <div key={contest._id} className="flex flex-col bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-hidden transition-all hover:shadow-md text-left">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isSubmitted ? 'bg-lime-50 text-lime-600' : 'bg-amber-50 text-amber-600'}`}>
                    {isSubmitted ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    isSubmitted ? 'text-lime-600' : 'text-amber-600'
                  }`}>
                    {isSubmitted ? (hasScore ? 'Evaluated' : 'Submitted') : 'Joined'}
                  </span>
                </div>
                {hasScore && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 rounded-full">
                    <Trophy className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Score: {part.score}</span>
                  </div>
                )}
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900 leading-tight">
                {contest.title}
              </h3>
              <p className="mb-6 text-sm text-gray-500 leading-relaxed line-clamp-2">
                {contest.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Category</span>
                  <span className="text-xs font-bold text-gray-700">{contest.category}</span>
                </div>
                
                {isSubmitted ? (
                  <button className="px-4 py-2 rounded-lg border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-gray-50 transition-colors">
                    View Submission
                  </button>
                ) : (
                  <button 
                    onClick={() => setSelectedForSubmission(contest)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#82C600] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#71ac00] active:scale-95"
                  >
                    Submit Work
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {participations.length === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-gray-100 py-16 text-center">
            <p className="text-gray-400 font-bold text-sm">You haven't joined any contests yet.</p>
        </div>
      )}

      {/* Submission Modal */}
      {selectedForSubmission && (
        <SubmissionForm
          contest={selectedForSubmission}
          onClose={() => {
            setSelectedForSubmission(null)
            fetchParticipations() // Refresh after potential submission
          }}
        />
      )}
    </div>
  )
}
