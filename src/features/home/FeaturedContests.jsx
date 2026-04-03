import { Button } from '../../components/ui/Button'

const contests = [
  {
    tag: 'MERN',
    title: 'Advanced MERN E-commerce',
    prize: '₹5,000 PRIZE POOL',
    ends: 'Ends in 12 Days',
    iconBg: 'bg-emerald-100 text-emerald-700',
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
  return (
    <section className="bg-mint-bg py-12 sm:py-16 lg:py-20" id="leaderboard">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-lime-600 sm:text-xs">
          Top challenges
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Featured Contests</h2>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-lime-600 hover:underline touch-manipulation"
          >
            view all projects →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {contests.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${c.iconBg}`}
                >
                  {c.icon}
                </span>
                <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-semibold text-lime-700">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 sm:mt-4 sm:text-lg">
                {c.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-lime-600">{c.prize}</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                <ClockIcon />
                {c.ends}
              </p>
              <Button variant="amber" className="mt-5 w-full touch-manipulation py-3 sm:mt-6">
                Participate
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
