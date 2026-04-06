import { Pencil, TrendingUp } from 'lucide-react'

export function ProfileHeader() {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#f0f6e6] p-6 shadow-sm border border-[#e2e8d5]">
      {/* Abstract Background Design right side */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#e4e9d3]/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture Block */}
        <div className="relative">
          <div className="h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-sm bg-black">
            <img 
              src="https://ui-avatars.com/api/?name=Alex+Sterling&background=111827&color=fff&size=200" 
              alt="Alex Sterling"
              className="h-full w-full object-cover"
            />
          </div>
          <button className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f9bd1c] text-amber-950 shadow hover:bg-[#e6ae1a] transition-colors">
            <Pencil className="h-3.5 w-3.5" strokeWidth={3} />
          </button>
        </div>

        {/* Name and Tags */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 rounded bg-[#f3dcb5] px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-[#9d6b20] mb-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Scholar Level 4
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            Alex Sterling
          </h1>
          <p className="text-sm font-medium text-gray-600">
            Computer Science & Theoretical Mathematics
          </p>
        </div>

        {/* Statistics Right Block */}
        <div className="flex flex-col items-center md:items-end justify-center self-stretch border-t md:border-t-0 md:border-l border-[#d6e0b7] pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0 min-w-[200px]">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">
            Total Earnings
          </div>
          <div className="text-3xl font-black text-[#446611] mb-1">
             ₹1,420
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <TrendingUp className="h-3 w-3 text-emerald-600" />
            +12% from last month
          </div>
        </div>
      </div>
    </div>
  )
}
