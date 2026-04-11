import { useState } from 'react'
import { ArrowRight, Code2, Palette } from 'lucide-react'
import { SubmissionForm } from '../all-contests/SubmissionForm'

const activeContestsData = [
  {
    _id: "active-1", // Using underscore for consistency with backend
    title: 'Advanced State Management Challenge',
    description: 'Implement a complex store architecture using Redux Toolkit and middleware for high-performance data fetching.',
    deadline: '24 Hours Left',
    reward: '₹500 PRIZE POOL',
    tag: 'MERN',
    icon: Code2,
    iconBg: 'bg-lime-100 text-lime-700',
    ends: 'Ends in 24 Hours',
    prizeMoney: 500
  },
  {
    _id: "active-2",
    title: 'UI/UX Design Sprint',
    description: 'Mobile Application for Digital Education Systems.',
    deadline: 'Pending Evaluation',
    reward: '₹1,200 PRIZE POOL',
    tag: 'DESIGN',
    icon: Palette,
    iconBg: 'bg-violet-100 text-violet-700',
    ends: 'Completed',
    prizeMoney: 1200
  }
]

export function ActiveParticipations() {
  const [selectedForSubmission, setSelectedForSubmission] = useState(null)

  return (
    <div className="mb-12 mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-amber-400"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight text-left">Active Participations</h2>
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          {activeContestsData.length} Ongoing
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {/* Main large card (Featured) */}
        {activeContestsData.slice(0, 1).map((contest) => (
          <div key={contest._id} className="flex flex-col md:flex-row flex-1 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 gap-6 shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 md:h-auto w-full md:w-[220px] shrink-0 overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-4 text-center">
                <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">SAFE T WORK</span>
              </div>
              <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="flex flex-col justify-between py-1 text-left flex-1 min-w-0">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                    In Progress
                  </span>
                  <span className="text-[11px] font-bold text-[#82C600]">React Advanced Masterclass</span>
                </div>
                <h3 className="mb-3 text-xl sm:text-2xl font-bold leading-tight text-gray-900 truncate sm:whitespace-normal">
                  {contest.title}
                </h3>
                <p className="mb-6 max-w-sm text-sm text-gray-500 leading-relaxed">
                  {contest.description}
                </p>

                <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-8">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1 font-black">Status</div>
                    <div className="text-sm font-bold text-gray-900">Not submitted yet</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1 font-black">Deadline</div>
                    <div className="text-sm font-bold text-red-500">{contest.deadline}</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => setSelectedForSubmission(contest)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#82C600] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#71ac00] active:scale-95"
                >
                  Submit Work
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Small secondary card */}
        {activeContestsData.slice(1, 2).map((contest) => (
          <div key={contest._id} className="w-full lg:w-[320px] shrink-0 rounded-2xl bg-[#f7f9f2] p-6 shadow-sm border border-[#e8eed8] flex flex-col text-left transition-all hover:shadow-md">
            <div className="mb-4 text-left">
              <span className="rounded-md bg-[#ffffff] border border-[#d6e0b7] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                Pending evaluation
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 leading-tight">{contest.title}</h3>
            <p className="mb-8 text-sm text-gray-600 leading-relaxed">
              {contest.description}
            </p>
            <div className="mt-auto">
              <button className="w-full rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#82C600] shadow-sm transition-all hover:bg-gray-50 text-center border border-gray-100 active:scale-95">
                View Submission
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Submission Modal */}
      {selectedForSubmission && (
        <SubmissionForm
          contest={selectedForSubmission}
          onClose={() => setSelectedForSubmission(null)}
        />
      )}
    </div>
  )
}
