import { BarChart, Trophy, Globe, Box } from 'lucide-react'

export function AcademicSummary() {
  return (
    <div className="rounded-2xl bg-[#446611] p-8 text-white shadow-md">
      <h3 className="mb-8 flex items-center gap-2 text-[15px] font-bold">
        <BarChart className="h-5 w-5 text-[#82c600]" />
        Academic Summary
      </h3>

      <div className="flex flex-col gap-6 relative">
        {/* Connecting line */}
        <div className="absolute left-[3.25rem] top-4 bottom-4 w-px bg-white/10 hidden sm:block"></div>

        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#82c600] mb-1">
              Contests Won
            </div>
            <div className="text-4xl font-black">3</div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5c8020] text-[#f9bd1c]">
            <Trophy className="h-6 w-6" />
          </div>
        </div>

        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#82c600] mb-1">
              Global Rank
            </div>
            <div className="text-4xl font-black">#42</div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5c8020] text-[#f9bd1c]">
            <Globe className="h-6 w-6" />
          </div>
        </div>

        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#82c600] mb-1">
              Total Points
            </div>
            <div className="text-4xl font-black">9,450</div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5c8020] text-[#f9bd1c]">
             <Box className="h-6 w-6" />
          </div>
        </div>
      </div>

      <button className="mt-10 w-full rounded-xl bg-[#82c600] py-4 text-[11px] font-black uppercase tracking-widest text-[#2a400a] transition-colors hover:bg-[#71ac00] shadow-sm">
        View Leaderboard
      </button>
    </div>
  )
}
