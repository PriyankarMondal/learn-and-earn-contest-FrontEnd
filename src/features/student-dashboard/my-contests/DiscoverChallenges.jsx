import { useState, useEffect } from 'react'
import { Database, Monitor, Palette, Megaphone, Eye, Loader2, Globe, Layout, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContestDetails } from '../all-contests/ContestDetails'
import { fetchContests } from '../../../api/student.api'
import { toast } from 'react-toastify'

const categoryIcons = {
  'MERN Stack': { icon: Database, bg: 'bg-lime-50 text-lime-500 border-lime-100' },
  'UI/UX Design': { icon: Palette, bg: 'bg-violet-50 text-violet-500 border-violet-100' },
  'Web Development': { icon: Globe, bg: 'bg-sky-50 text-sky-500 border-sky-100' },
  'Graphics Design': { icon: Layout, bg: 'bg-amber-50 text-amber-500 border-amber-100' },
  'Digital Marketing': { icon: Megaphone, bg: 'bg-cyan-50 text-cyan-500 border-cyan-100' },
  'Fullstack': { icon: Code2, bg: 'bg-indigo-50 text-indigo-500 border-indigo-100' }
}

export function DiscoverChallenges() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedContest, setSelectedContest] = useState(null)

  const loadDiscoverContests = async () => {
    try {
      const data = await fetchContests()
      // Show latest 4 'running' or 'upcoming' contests
      const filtered = data
        .filter(c => c.status !== 'ended')
        .slice(0, 4)
      setContests(filtered)
    } catch (error) {
      console.error('Discover load error:', error)
      toast.error('Failed to load new challenges')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDiscoverContests()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-[#82C600] animate-spin" />
      </div>
    )
  }

  return (
    <div className="mb-10 text-left">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-[#82C600]"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Discover New Challenges</h2>
        </div>
        <Link to="/all-contests" className="text-[11px] font-extrabold uppercase tracking-widest text-[#82C600] border-2 border-transparent hover:border-[#82C600]/20 px-3 py-1.5 rounded-lg transition-all">
          View All &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contests.length === 0 ? (
          <div className="col-span-full py-12 bg-white rounded-2xl border border-dashed border-gray-200 text-center">
            <p className="text-sm font-medium text-gray-400">No new challenges available at the moment.</p>
          </div>
        ) : (
          contests.map((item) => {
            const config = categoryIcons[item.category] || categoryIcons['Web Development']
            const Icon = config.icon
            
            return (
              <div key={item._id} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 h-full transition-all hover:shadow-md">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${config.bg}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest bg-lime-50 text-lime-600`}>
                      {item.status || 'Active'}
                    </span>
                  </div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#82C600]">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-8 min-h-[3rem] line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Reward</div>
                      <div className="text-[15px] font-black text-gray-900">₹{item.prizeMoney || 0}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Deadline</div>
                      <div className={`text-xs font-bold text-gray-900`}>
                        {new Date(item.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => setSelectedContest(item)}
                      className={`w-full rounded-xl bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950 py-3 text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-sm`}
                    >
                      Participate
                    </button>
                    <button 
                      onClick={() => setSelectedContest(item)}
                      className="w-full py-2.5 flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-all hover:bg-slate-50 rounded-xl"
                    >
                      <Eye className="w-4 h-4" />
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Contest Details Modal */}
      {selectedContest && (
        <ContestDetails
          contest={selectedContest}
          onClose={() => setSelectedContest(null)}
        />
      )}
    </div>
  )
}
