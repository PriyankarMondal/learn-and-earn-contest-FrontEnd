import { useState } from 'react'
import { Database, Monitor, Palette, Megaphone, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContestDetails } from '../all-contests/ContestDetails'

const discoverData = [
  {
    _id: 'disc-1',
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
    description: 'Create a high-performance real-time dashboard using Socket.io and React.',
    prizeMoney: 1200,
    category: 'MERN Stack'
  },
  {
    _id: 'disc-2',
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
    description: 'Build a drag-and-drop portfolio builder for developers.',
    prizeMoney: 800,
    category: 'Web Development'
  },
  {
    _id: 'disc-3',
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
    description: 'Design a modern web interface for a new educational platform.',
    prizeMoney: 650,
    category: 'UI/UX Design'
  },
  {
    _id: 'disc-4',
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
    description: 'Develop a growth strategy for a new B2B SaaS product.',
    prizeMoney: 400,
    category: 'Digital Marketing'
  },
]

export function DiscoverChallenges() {
  const [selectedContest, setSelectedContest] = useState(null)

  return (
    <div className="mb-10 text-left">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-[#82C600]"></div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Discover New Challenges</h2>
        </div>
        <Link to="/all-contests" className="text-[11px] font-extrabold uppercase tracking-widest text-[#82C600] border-2 border-transparent hover:border-[#82C600]/20 px-3 py-1.5 rounded-lg transition-all">
          View All &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discoverData.map((item) => (
          <div key={item._id} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 h-full transition-all hover:shadow-md">
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
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-8 min-h-[3rem]">
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
              
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedContest(item)}
                  className={`w-full rounded-xl ${item.btnVariant} py-3 text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-sm`}
                >
                  Participate
                </button>
                <button 
                  onClick={() => setSelectedContest(item)}
                  className="w-full py-2.5 flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-all hover:bg-slate-50 rounded-xl"
                >
                  <Eye className="w-4 h-4" />
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contest Details Modal */}
      {selectedContest && (
        <ContestDetails
          contest={selectedContest}
          onClose={() => setSelectedContest(null)}
        />
      )}
    </div>
  )
}
