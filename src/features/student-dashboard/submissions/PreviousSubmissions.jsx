import { Brain, TrendingUp, Code2, ArrowRight, Eye } from 'lucide-react'

const submissionsData = [
  {
    icon: Brain,
    title: 'Neural Architecture Design',
    reward: '₹800',
    tag: 'SUBMITTED - PENDING EVALUATION',
    tagClass: 'bg-[#F9BD1C] text-amber-950',
    stats: [
      { label: 'SUBMITTED', value: '2 days ago' },
      { label: 'TYPE', value: 'Model Design' }
    ],
    buttonText: 'VIEW SUBMISSION',
    buttonIcon: ArrowRight,
    buttonClass: 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950',
  },
  {
    icon: TrendingUp,
    title: 'Market Sentiment Analysis',
    reward: '₹650',
    tag: 'GRADED',
    tagClass: 'bg-[#82C600] text-white',
    stats: [
      { label: 'SCORE', value: '88/100' },
      { label: 'RANK', value: '#12' },
      { label: 'EARNINGS', value: '₹320' }
    ],
    buttonText: 'VIEW RESULTS',
    buttonIcon: Eye,
    buttonClass: 'bg-[#e4e9d3] hover:bg-[#d6e0b7] text-gray-700',
  },
  {
    icon: Code2,
    title: 'Algorithm Optimization',
    reward: '₹1,200',
    tag: 'GRADED',
    tagClass: 'bg-[#82C600] text-white',
    stats: [
      { label: 'SCORE', value: '74/100' },
      { label: 'RANK', value: '#45' },
      { label: 'EARNINGS', value: '₹0' }
    ],
    buttonText: 'VIEW RESULTS',
    buttonIcon: Eye,
    buttonClass: 'bg-[#e4e9d3] hover:bg-[#d6e0b7] text-gray-700',
  }
]

export function PreviousSubmissions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {submissionsData.map((item, idx) => (
        <div key={idx} className="flex flex-col justify-between rounded-2xl bg-[#f8fbf5] p-6 shadow-sm border border-[#e2e8d5] h-full">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-lime-600">
                <item.icon className="h-5 w-5" />
              </div>
              <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest shadow-sm ${item.tagClass}`}>
                {item.tag}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
              {item.title}
            </h3>
            <div className="text-[11px] font-bold text-gray-400 mb-6">
              Reward: <span className="text-[#82C600]">{item.reward}</span>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-6 mb-6">
              {item.stats.map((stat, i) => (
                <div key={i} className="flex-1">
                  <div className="text-[8px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-sm font-black text-gray-900">{stat.value}</div>
                </div>
              ))}
            </div>

            <button className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${item.buttonClass}`}>
              {item.buttonText}
              <item.buttonIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

