import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, Medal, Trophy } from 'lucide-react'
import { fetchGlobalLeaderboard } from '../../../api/student.api'
import { useUser } from '../../../context/UserContext'

export function SubmissionsSidePanel() {
  const { user } = useUser()
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchGlobalLeaderboard()
        setLeaderboard(Array.isArray(data) ? data.slice(0, 5) : [])
      } catch (error) {
        console.error('Failed to load leaderboard:', error)
        setLeaderboard([])
      } finally {
        setLoading(false)
      }
    }

    loadLeaderboard()
  }, [])

  const formatScore = (score) => {
    if (typeof score === 'number') {
      return score.toLocaleString('en-IN')
    }

    return score || 0
  }

  const getRankIcon = (rank) => {
    if (rank === 1) {
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Trophy className="h-4 w-4" />
        </div>
      )
    }

    if (rank === 2 || rank === 3) {
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Medal className="h-4 w-4" />
        </div>
      )
    }

    return (
      <span className="w-7 text-center text-xs font-black text-gray-400">
        #{rank}
      </span>
    )
  }

  return (
    <div className="rounded-xl border border-[#e2e8d5]/50 bg-[#f1f4e8] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.8)]">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-500">
            <Trophy className="h-4 w-4 text-amber-500" />
            Leaderboard
          </h3>
          <p className="mt-2 text-xs font-semibold text-[#5c8020]">
            Overall student rankings
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-[#5c8020]" />
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="rounded-xl bg-white px-4 py-6 text-center text-sm font-medium text-gray-500 shadow-sm">
          No leaderboard data available yet.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {leaderboard.map((entry, index) => {
            const rank = index + 1
            const isCurrentUser =
              user?.id === entry._id ||
              user?.email === entry.email

            return (
              <div
                key={entry._id || `${entry.email || entry.name}-${rank}`}
                className={`flex items-center justify-between rounded-lg p-3 ${
                  isCurrentUser ? 'bg-[#e4e9d3] ring-1 ring-[#c0d892]' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  {getRankIcon(rank)}
                  <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(entry.name || 'Student')}&background=${isCurrentUser ? '446611' : '1e293b'}&color=fff`}
                      alt={entry.name || 'Student'}
                    />
                  </div>
                  <div>
                    <div className={`text-xs font-bold leading-none ${isCurrentUser ? 'text-[#446611]' : 'text-gray-900'}`}>
                      {entry.name || 'Unknown Student'} {isCurrentUser && <span className="font-normal">(You)</span>}
                    </div>
                    <div className="mt-1 text-[10px] font-medium text-gray-400">
                      {entry.email || 'Leaderboard entry'}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-black text-gray-900">{formatScore(entry.totalScore)}</div>
              </div>
            )
          })}
        </div>
      )}

      
    </div>
  )
}
