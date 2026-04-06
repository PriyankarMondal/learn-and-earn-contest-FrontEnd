import { Clock, Award } from 'lucide-react'

const activeContestsData = [
  {
    id: 1,
    title: 'Neural Architecture Design',
    desc: 'Design an optimized transformer layer for low-latency edge device inference. Requires Python and PyTorch expertise.',
    deadline: '2 days left',
    reward: '₹200',
    tags: [{ label: 'Ending Soon', bg: 'bg-amber-100 text-amber-800' }, { label: 'Hard', bg: 'bg-red-100 text-red-800' }],
    button: 'SUBMIT WORK',
    btnVariant: 'bg-[#f9bd1c] hover:bg-[#e6ae1a] text-amber-950',
    image: 'bg-slate-900',
  },
  {
    id: 2,
    title: 'Market Sentiment Analysis',
    desc: 'Analyze social media trends to predict crypto market movements for top 10 assets. 1000 word report required.',
    deadline: '5 days left',
    reward: '₹150',
    tags: [{ label: 'Open', bg: 'bg-lime-200 text-lime-800' }, { label: 'Medium', bg: 'bg-gray-200 text-gray-800' }],
    button: 'PARTICIPATE',
    btnVariant: 'bg-[#82c600] hover:bg-[#71ac00] text-white',
    image: 'bg-slate-800',
  }
]

export function ActiveContestsList() {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <svg className="w-5 h-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Active Contests
        </h2>
        <a href="#/dashboard" className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] hover:underline">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {activeContestsData.map((contest) => (
          <div key={contest.id} className="flex gap-5 rounded-xl bg-white p-4 pr-6 shadow-sm border border-gray-100 items-start overflow-hidden">
            <div className={`h-24 w-24 shrink-0 rounded-lg ${contest.image} relative overflow-hidden flex items-center justify-center`}>
              {/* Placeholder abstract visual */}
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
              <svg className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-bold text-gray-900 truncate">{contest.title}</h3>
                <div className="flex gap-2">
                  {contest.tags.map(tag => (
                    <span key={tag.label} className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${tag.bg}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mb-4 max-w-lg leading-relaxed">
                {contest.desc}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Deadline: <span className="text-gray-900">{contest.deadline}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                  <Award className="w-4 h-4 text-lime-600" />
                  Reward: <span className="text-gray-900">{contest.reward}</span>
                </div>
              </div>
            </div>

            <div className="self-center pl-4 border-l border-gray-100">
              <button className={`${contest.btnVariant} px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors shadow-sm`}>
                {contest.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
