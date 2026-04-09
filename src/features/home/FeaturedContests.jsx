import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ContestDetails } from '../student-dashboard/all-contests/ContestDetails'
import { toast } from 'react-toastify'

const contests = [
  {
    tag: 'MERN',
    title: 'Advanced MERN E-commerce',
    prize: '₹5,000 PRIZE POOL',
    ends: 'Ends in 12 Days',
    iconBg: 'bg-lime-100 text-lime-700',
    icon: '🛒',
  },
  {
    tag: 'DESIGN',
    title: 'UI Kit Challenge',
    prize: '₹2,500 PRIZE POOL',
    ends: 'Ends in 8 Days',
    iconBg: 'bg-violet-100 text-violet-700',
    icon: '🎨',
  },
  {
    tag: 'MERN',
    title: 'Real-time Chat API',
    prize: '₹3,000 PRIZE POOL',
    ends: 'Ends in 20 Days',
    iconBg: 'bg-sky-100 text-sky-700',
    icon: '💬',
  },
  {
    tag: 'MERN',
    title: 'Portfolio CMS Sprint',
    prize: '₹1,500 PRIZE POOL',
    ends: 'Ends in 5 Days',
    iconBg: 'bg-amber-100 text-amber-700',
    icon: '📁',
  },
]

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

export function FeaturedContests() {
  const navigate = useNavigate()
  const [selectedContest, setSelectedContest] = useState(null)

  const handleViewAll = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      navigate('/all-contests')
    } else {
      toast.error('Please login to explore all contests')
      navigate('/login')
    }
  }

  const handleOpenContest = (contest) => {
    setSelectedContest(contest)
  }

  return (
    <section className="bg-mint-bg py-12 sm:py-16 lg:pb-24 lg:pt-20" id="leaderboard">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
          {contests.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${c.iconBg}`}
                >
                  {c.icon}
                </span>
                <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-lime-700">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 sm:mt-4 sm:text-lg min-h-[3.5rem] flex items-start text-left">
                {c.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-lime-600 text-left tracking-tight">{c.prize}</p>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-gray-500">
                <ClockIcon />
                {c.ends}
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:mt-6">
                <Button
                  variant="amber"
                  className="w-full touch-manipulation py-3 text-xs font-bold uppercase tracking-wider"
                  onClick={() => handleOpenContest(c)}
                >
                  Participate
                </Button>
                <button
                  onClick={() => handleOpenContest(c)}
                  className="w-full py-2 text-[11px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors"
                >
                  See Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Home Page Modal Integration */}
        {selectedContest && (
          <ContestDetails
            contest={selectedContest}
            initialView="details"
            showTabs={false}
            onClose={() => setSelectedContest(null)}
          />
        )}
      </div>
    </section>
  )
}
