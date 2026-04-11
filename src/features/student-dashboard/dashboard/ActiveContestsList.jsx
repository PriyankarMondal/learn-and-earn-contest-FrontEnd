import { useState, useEffect } from 'react'
import { Clock, Award, Loader2, Send, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SubmissionForm } from '../all-contests/SubmissionForm'
import { ContestDetails } from '../all-contests/ContestDetails'
import { fetchContests } from '../../../api/student.api'
import { toast } from 'react-toastify'

export function ActiveContestsList() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedForSubmission, setSelectedForSubmission] = useState(null)
  const [selectedForDetails, setSelectedForDetails] = useState(null)

  const loadContests = async () => {
    try {
      const data = await fetchContests()
      // Filter for 'running' contests (assuming active means running and joined)
      setContests(data.filter(c => c.status === 'running'))
    } catch (error) {
      toast.error('Failed to load active contests')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContests()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-lime-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="mb-10 text-left">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2 text-left">
          <svg className="w-5 h-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Active Contests
        </h2>
        <Link to="/all-contests" className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] hover:underline">
          View All
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {contests.length === 0 ? (
          <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-500">No active contests found. Check back later!</p>
          </div>
        ) : (
          contests.map((contest) => (
            <div key={contest._id} className="flex flex-col sm:flex-row gap-5 rounded-xl bg-white p-4 sm:pr-6 shadow-sm border border-gray-100 items-start sm:items-center overflow-hidden transition-all hover:shadow-md text-left">
              <div 
                className="h-24 w-full sm:w-24 shrink-0 rounded-lg bg-slate-900 relative overflow-hidden flex items-center justify-center cursor-pointer group"
                onClick={() => setSelectedForDetails(contest)}
              >
                <div className="absolute inset-0 bg-[#82C600]/20 mix-blend-overlay group-hover:bg-[#82C600]/40 transition-colors"></div>
                <Trophy className="w-10 h-10 text-white/50 group-hover:text-white/80 transition-colors" />
              </div>

              <div className="flex-1 min-w-0 w-full text-left">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2 text-left">
                  <h3 
                    className="text-base font-black text-gray-900 truncate text-left hover:text-[#82C600] cursor-pointer transition-colors"
                    onClick={() => setSelectedForDetails(contest)}
                  >
                    {contest.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider whitespace-nowrap bg-lime-200 text-lime-800">
                      Running
                    </span>
                  </div>
                </div>

                <p className="text-xs font-medium text-gray-500 mb-4 max-w-lg leading-relaxed text-left line-clamp-2">
                  {contest.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Deadline: <span className="text-gray-900">{new Date(contest.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                    <Award className="w-4 h-4 text-lime-600" />
                    Participants: <span className="text-gray-900">{contest.participantsCount || 0}</span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto mt-4 sm:mt-0 sm:pl-4 sm:border-l border-gray-100">
                <button
                  onClick={() => setSelectedForSubmission(contest)}
                  className="bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950 w-full sm:w-auto px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  SUBMIT WORK
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Submission Form Modal */}
      {selectedForSubmission && (
        <SubmissionForm
          contest={selectedForSubmission}
          onClose={() => setSelectedForSubmission(null)}
        />
      )}

      {/* Optional Details Modal from Dashboard */}
      {selectedForDetails && (
        <ContestDetails 
          contest={selectedForDetails}
          onClose={() => setSelectedForDetails(null)}
        />
      )}
    </div>
  )
}
