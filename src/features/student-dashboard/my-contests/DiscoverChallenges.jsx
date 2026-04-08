import { Database, Monitor, Palette, Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const discoverData = [
  {
    tag: 'MERN Stack',
    title: 'Real-time Dashboard for E-commerce',
    reward: '₹1,200',
    deadline: '3 days left',
    deadlineColor: 'text-red-500',
    diff: 'HARD',
    diffColor: 'bg-red-50 text-red-500',
    icon: Database,
    iconColor: 'text-lime-500 bg-lime-50 border-lime-100',
    btnVariant: 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950',
  },
  {
    tag: 'Web Development',
    title: 'Portfolio Builder Framework',
    reward: '₹800',
    deadline: '5 days left',
    deadlineColor: 'text-gray-900',
    diff: 'MEDIUM',
    diffColor: 'bg-indigo-50 text-indigo-500',
    icon: Monitor,
    iconColor: 'text-lime-500 bg-lime-50 border-lime-100',
    btnVariant: 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950',
  },
  {
    tag: 'UI/UX Design',
    title: 'Neo-Academic Web Interface',
    reward: '₹650',
    deadline: '12 hours left',
    deadlineColor: 'text-red-500',
    diff: 'HARD',
    diffColor: 'bg-red-50 text-red-500',
    icon: Palette,
    iconColor: 'text-lime-500 bg-lime-50 border-lime-100',
    btnVariant: 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950',
  },
  {
    tag: 'Digital Marketing',
    title: 'SaaS Growth Campaign Strategy',
    reward: '₹400',
    deadline: '1 week left',
    deadlineColor: 'text-gray-900',
    diff: 'EASY',
    diffColor: 'bg-slate-100 text-slate-500',
    icon: Megaphone,
    iconColor: 'text-lime-500 bg-lime-50 border-lime-100',
    btnVariant: 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950',
  },
]

export function DiscoverChallenges() {
  return (
    <div className="mb-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-[#82C600]"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Discover New Challenges</h2>
        </div>
        <Link to="/dashboard" className="text-[11px] font-extrabold uppercase tracking-widest text-[#82C600] hover:underline">
          View All &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discoverData.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.iconColor}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className={`rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest ${item.diffColor}`}>
                  {item.diff}
                </span>
              </div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#82C600]">
                {item.tag}
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-8">
                {item.title}
              </h3>
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Reward</div>
                  <div className="text-[15px] font-black text-gray-900">{item.reward}</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Deadline</div>
                  <div className={`text-xs font-bold ${item.deadlineColor}`}>{item.deadline}</div>
                </div>
              </div>
              <button className={`w-full rounded-xl ${item.btnVariant} py-3 text-[11px] font-black uppercase tracking-widest transition-colors`}>
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


