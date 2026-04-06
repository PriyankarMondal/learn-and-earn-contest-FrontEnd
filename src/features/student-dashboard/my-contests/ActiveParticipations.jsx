import { ArrowRight } from 'lucide-react'

export function ActiveParticipations() {
  return (
    <div className="mb-12 mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-amber-400"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Active Participations</h2>
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          2 Ongoing
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {/* Main large card */}
        <div className="flex flex-col sm:flex-row flex-1 bg-white rounded-2xl border border-gray-100 p-6 gap-6 shadow-sm">
          {/* Card Image Placeholder */}
          <div className="relative h-48 sm:h-full w-full sm:w-[220px] shrink-0 overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-4 text-center">
              <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">SAFE T WORK</span>
            </div>
            {/* Simple abstract avatar icon standing in for the suit guy */}
            <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <div className="flex flex-col justify-between py-1">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                  In Progress
                </span>
                <span className="text-[11px] font-bold text-[#82c600]">React Advanced Masterclass</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-tight text-gray-900">
                Advanced State Management Challenge
              </h3>
              <p className="mb-6 max-w-sm text-sm text-gray-500 leading-relaxed">
                Implement a complex store architecture using Redux Toolkit and middleware for high-performance data fetching.
              </p>

              <div className="flex items-center gap-12 mb-8">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Status</div>
                  <div className="text-sm font-bold text-gray-900">Not submitted yet</div>
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Deadline</div>
                  <div className="text-sm font-bold text-red-500">24 Hours Left</div>
                </div>
              </div>
            </div>

            <div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#82c600] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#71ac00]">
                Submit Work
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Small secondary card */}
        <div className="w-full lg:w-[320px] shrink-0 rounded-2xl bg-[#e4e9d3] p-6 shadow-sm border border-[#d6e0b7] flex flex-col">
          <div className="mb-4">
            <span className="rounded-md bg-[#f1f4e8] border border-[#d6e0b7] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
              Pending evaluation
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900 leading-tight">UI/UX Design Sprint</h3>
          <p className="mb-8 text-sm text-gray-600 leading-relaxed">
            Mobile Application for Digital Education Systems.
          </p>
          <div className="mt-auto">
            <button className="w-full rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#82c600] shadow-sm transition-colors hover:bg-gray-50 text-center">
              View Submission
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
