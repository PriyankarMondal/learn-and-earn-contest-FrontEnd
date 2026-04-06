export function WelcomeBanner({ userName = 'Alex Rivera', earnings = '₹1,420' }) {
  return (
    <div className="relative mb-6 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#4d7013] to-[#82C600] p-8 text-white shadow-sm md:flex-row md:items-center">
      {/* Abstract Background Design */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-[300px] w-[300px] opacity-10">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L65.45 30.9L97.55 35.45L74.3 58.05L79.8 90.45L50 74.8L20.2 90.45L25.7 58.05L2.45 35.45L34.55 30.9L50 0Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back, {userName} <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
          Continue your journey toward academic excellence and reward. Check your latest rankings and active challenges.
        </p>
      </div>

      <div className="relative z-10 mt-6 md:mt-0 flex shrink-0">
        <div className="rounded-xl bg-black/10 px-6 py-5 backdrop-blur-sm border border-white/10 flex items-center gap-6">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#dbe2c9] mb-1">
              Total Earnings
            </div>
            <div className="text-4xl font-black">{earnings}</div>
          </div>
          <div className="rounded-full bg-[#F9BD1C] w-12 h-12 flex flex-col items-center justify-center text-amber-950 shadow-sm">
            <span className="text-[11px] font-bold leading-none">+21%</span>
            <span className="text-[7px] font-extrabold uppercase leading-none mt-0.5">this month</span>
          </div>
        </div>
      </div>
    </div>
  )
}

