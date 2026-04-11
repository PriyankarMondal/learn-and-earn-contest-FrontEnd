import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/ui/Button'
import { Database, Palette, Globe, Layout, Megaphone, Code2, Loader2, Eye } from 'lucide-react'
import { ContestDetails } from './ContestDetails'
import { fetchContests } from '../../../api/student.api'
import { toast } from 'react-toastify'

const categoryIcons = {
  'MERN Stack': { icon: Database, bg: 'bg-lime-100 text-lime-700' },
  'UI/UX Design': { icon: Palette, bg: 'bg-violet-100 text-violet-700' },
  'Web Development': { icon: Globe, bg: 'bg-sky-100 text-sky-700' },
  'Graphics Design': { icon: Layout, bg: 'bg-amber-100 text-amber-700' },
  'Marketing': { icon: Megaphone, bg: 'bg-cyan-100 text-cyan-700' },
  'Fullstack': { icon: Code2, bg: 'bg-indigo-100 text-indigo-700' }
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export function AllContestsList() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedContest, setSelectedContest] = useState(null)

  const loadContests = async () => {
    try {
      const data = await fetchContests()
      setContests(data)
    } catch (error) {
      toast.error('Failed to load contests')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContests()
  }, [])

  const handleOpenDetails = (contest) => {
    setSelectedContest(contest)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-lime-500 animate-spin" />
      </div>
    )
  }

  return (
    <section className="bg-transparent pb-12 sm:pb-16 lg:pb-20 text-left">
      <div className="mx-auto max-w-6xl text-left">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-lime-600 sm:text-xs">
          Discover opportunities
        </p>

        <div className="mt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Explore Contests</h2>
            <p className="mt-2 text-gray-500 text-sm font-medium">Browse and apply to the latest industry-leading contests</p>
          </div>

          <div className="relative shrink-0">
            <input
              type="text"
              placeholder="Search contests..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-lime-500 transition-colors w-full sm:w-64 bg-white"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 opacity-60">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 text-left">
          {contests.map((c) => {
            const config = categoryIcons[c.category] || categoryIcons['Web Development']
            const Icon = config.icon
            
            return (
              <article
                key={c._id}
                className="flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300 text-left"
              >
                <div className="flex items-start justify-between gap-2 text-left">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.bg}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime-700">
                    {c.category}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 sm:mt-4 sm:text-lg min-h-[3.5rem] flex items-start text-left">
                  {c.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-lime-600 tracking-tight">₹{c.prizeMoney} PRIZE POOL</p>

                <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-gray-500 text-left">
                  <ClockIcon />
                  {c.status === 'running' ? `Ends ${new Date(c.endDate).toLocaleDateString()}` : c.status}
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  <Button
                    variant="amber"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider"
                    onClick={() => handleOpenDetails(c)}
                    disabled={c.status !== 'running'}
                  >
                    {c.status === 'running' ? 'Participate' : 'Closed'}
                  </Button>

                  <button
                    onClick={() => handleOpenDetails(c)}
                    className="w-full py-2.5 flex items-center justify-center gap-2 text-[11px] font-black text-gray-500 hover:text-[#82C600] uppercase tracking-widest transition-all hover:bg-slate-50 rounded-xl"
                  >
                    <Eye className="w-4 h-4" />
                    See Details
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Contest Details Modal */}
      {selectedContest && (
        <ContestDetails
          contest={selectedContest}
          onClose={() => setSelectedContest(null)}
        />
      )}
    </section>
  )
}
