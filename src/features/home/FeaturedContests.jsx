import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trophy, Loader2, Database, Palette, Globe, Layout, Megaphone, Code2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { ContestDetails } from '../student-dashboard/all-contests/ContestDetails'
import { apiRequest } from '../../api/fetch'

const categoryIcons = {
  'MERN Stack': { icon: Database, bg: 'bg-lime-100 text-lime-700' },
  'UI/UX Design': { icon: Palette, bg: 'bg-violet-100 text-violet-700' },
  'Web Development': { icon: Globe, bg: 'bg-sky-100 text-sky-700' },
  'Graphics Design': { icon: Layout, bg: 'bg-amber-100 text-amber-700' },
  'Marketing': { icon: Megaphone, bg: 'bg-cyan-100 text-cyan-700' },
  'Fullstack': { icon: Code2, bg: 'bg-indigo-100 text-indigo-700' },
  'default': { icon: Trophy, bg: 'bg-lime-100 text-lime-700' },
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function FeaturedContests() {
  const navigate = useNavigate()
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedContest, setSelectedContest] = useState(null)
  const [detailLoading, setDetailLoading] = useState(null) // stores the ID being loaded

  useEffect(() => {
    const loadContests = async () => {
      try {
        setLoading(true)
        let data

        // Try authenticated endpoint first (works when user is logged in)
        // Falls back to public endpoint (available after backend deploy)
        try {
          data = await apiRequest('/student/v1/contests', 'GET')
        } catch {
          data = await apiRequest('/student/v1/public-contests', 'GET')
        }

        // Show top 4 running contests first, then upcoming
        const sorted = [...data].sort((a, b) => {
          if (a.status === 'running' && b.status !== 'running') return -1
          if (b.status === 'running' && a.status !== 'running') return 1
          return 0
        })
        setContests(sorted.slice(0, 4))
      } catch (err) {
        console.error('Failed to load featured contests:', err)
        setContests([])
      } finally {
        setLoading(false)
      }
    }
    loadContests()
  }, [])

  // Fetch FULL contest details by ID (includes requirements, description, etc.)
  const handleOpenContest = async (contestId) => {
    try {
      setDetailLoading(contestId)
      let fullContest

      // Try authenticated detail route first, then public
      try {
        fullContest = await apiRequest(`/student/v1/contest/${contestId}`, 'GET')
      } catch {
        fullContest = await apiRequest(`/student/v1/public-contest/${contestId}`, 'GET')
      }

      setSelectedContest(fullContest)
    } catch (err) {
      console.error('Failed to load contest details:', err)
      // Fallback: use the card data we already have (limited fields)
      const fallback = contests.find(c => c._id === contestId)
      if (fallback) setSelectedContest(fallback)
    } finally {
      setDetailLoading(null)
    }
  }

  const handleViewAll = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      navigate('/all-contests')
    } else {
      navigate('/login')
    }
  }

  return (
    <section className="bg-mint-bg py-12 sm:py-16 lg:pb-24 lg:pt-20" id="leaderboard">
      <div className="w-full px-4 sm:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-lime-600 sm:text-xs">
          Top challenges
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Featured Contests</h2>
          <button
            onClick={handleViewAll}
            className="shrink-0 text-sm font-black uppercase tracking-widest text-[#82C600] hover:text-[#71ac00] touch-manipulation cursor-pointer border-none bg-transparent"
          >
            view all projects →
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {loading ? (
            <div className="col-span-full py-20 flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-lime-600" />
            </div>
          ) : contests.length === 0 ? (
            <p className="col-span-full text-center text-gray-400 font-bold py-16">
              No active contests right now. Check back soon!
            </p>
          ) : (
            contests.map((c) => {
              const config = categoryIcons[c.category] || categoryIcons['default']
              const Icon = config.icon
              const isRunning = c.status === 'running'

              return (
                <article
                  key={c._id}
                  onClick={() => handleOpenContest(c._id)}
                  className="flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.bg}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider
                      ${isRunning ? 'bg-lime-100 text-lime-700' : 'bg-gray-100 text-gray-500'}`}>
                      {c.category || 'Contest'}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 sm:mt-4 sm:text-lg min-h-[3.5rem] flex items-start text-left line-clamp-2">
                    {c.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-lime-600 text-left tracking-tight">
                    ₹{(c.prizeMoney || 0).toLocaleString()} PRIZE POOL
                  </p>

                  <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-gray-500">
                    <ClockIcon />
                    {c.endDate
                      ? (isRunning ? `Ends ${new Date(c.endDate).toLocaleDateString()}` : c.status.toUpperCase())
                      : 'TBD'}
                  </p>

                  <div className="mt-5 flex flex-col gap-2 sm:mt-6">
                    <Button
                      type="button"
                      variant="amber"
                      className="w-full touch-manipulation py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenContest(c._id)
                      }}
                      disabled={!isRunning || detailLoading === c._id}
                    >
                      {detailLoading === c._id ? (
                        <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading...</>
                      ) : (
                        isRunning ? 'Participate' : 'Closed'
                      )}
                    </Button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenContest(c._id)
                      }}
                      disabled={detailLoading === c._id}
                      className="w-full py-2 text-[11px] font-bold text-gray-400 hover:text-[#82C600] uppercase tracking-widest transition-colors disabled:opacity-50"
                    >
                      {detailLoading === c._id ? 'Loading...' : 'See Details'}
                    </button>
                  </div>
                </article>
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
    </section>
  )
}
