import { useState, useEffect } from 'react'
import { Trophy, Medal, Star, Loader2, Search } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function LeaderboardTable() {
  const [contests, setContests] = useState([])
  const [selectedContestId, setSelectedContestId] = useState('')
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    fetchContests()
  }, [])

  useEffect(() => {
    if (selectedContestId) {
      fetchLeaderboard(selectedContestId)
    }
  }, [selectedContestId])

  const fetchContests = async () => {
    try {
      const data = await apiRequest('/student/v1/contests')
      setContests(data)
      if (data.length > 0) setSelectedContestId(data[0]._id)
    } catch (err) {
      console.error('Fetch contests failed:', err)
    } finally {
      setInitialLoading(false)
    }
  }

  const fetchLeaderboard = async (id) => {
    try {
      setLoading(true)
      const data = await apiRequest(`/student/v1/leaderboard/${id}`)
      setLeaderboard(data)
    } catch (err) {
      console.error('Fetch leaderboard failed:', err)
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) {
    return (
      <div className="flex h-64 items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm">
        <Loader2 className="h-8 w-8 animate-spin text-lime-600" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 text-left">
      {/* Contest Selection Header */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Elite Performance Rankings</h2>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Real-time leaderboard data</p>
        </div>

        <div className="relative">
          <select 
            value={selectedContestId}
            onChange={(e) => setSelectedContestId(e.target.value)}
            className="appearance-none bg-[#f6f9f3] border border-gray-100/50 rounded-xl px-4 py-2.5 pr-10 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-lime-500/20 transition-all min-w-[240px]"
          >
            {contests.map(c => (
              <option key={c._id} value={c._id}>{c.title}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
             <Search className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Leaderboard Body */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Rank</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Contributor</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Score</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 relative">
              {loading && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-lime-600" />
                </div>
              )}
              
              {leaderboard.map((row, index) => {
                const rank = index + 1;
                return (
                  <tr key={row._id} className="hover:bg-gray-50/30 transition-all">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                         {rank === 1 ? (
                           <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm">
                              <Trophy className="w-4 h-4" />
                           </div>
                         ) : rank === 2 ? (
                           <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm">
                              <Medal className="w-4 h-4" />
                           </div>
                         ) : rank === 3 ? (
                           <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm">
                              <Medal className="w-4 h-4" />
                           </div>
                         ) : (
                           <span className="text-xs font-black text-gray-400 ml-3">#{rank}</span>
                         )}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                         <img 
                          src={`https://ui-avatars.com/api/?name=${row.user?.name.split(' ').join('+')}&background=446611&color=fff`} 
                          className="h-10 w-10 rounded-xl border-2 border-white shadow-sm"
                          alt="Ranker"
                         />
                         <div>
                           <div className="text-sm font-bold text-gray-900 leading-tight">{row.user?.name}</div>
                           <div className="text-[10px] font-bold text-gray-400">{row.user?.email}</div>
                         </div>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f9f3] border border-lime-100 text-lime-700">
                        <Star className="w-3 h-3 fill-lime-500" />
                        <span className="text-xs font-black tracking-tight">{row.score}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                       <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-lime-100 text-lime-700 rounded-lg">
                         Verified entry
                       </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {!loading && leaderboard.length === 0 && (
            <div className="py-20 text-center text-gray-400 font-bold">
              No evaluated entries found for this contest.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
