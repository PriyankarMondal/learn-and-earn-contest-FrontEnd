import { Layers, Users, ClipboardList } from 'lucide-react'

const statsData = [
  { 
    label: 'Total Contests', 
    value: '142', 
    tag: '+12% MONTHLY', 
    icon: Layers, 
    color: 'text-lime-600', 
    bg: 'bg-lime-50', 
    line: 'bg-lime-500', 
    tagStyle: 'text-gray-500 bg-transparent' 
  },
  { 
    label: 'Total Participants', 
    value: '18.5k', 
    tag: 'ACTIVE NOW', 
    icon: Users, 
    color: 'text-amber-500', 
    bg: 'bg-amber-50', 
    line: 'bg-amber-400', 
    tagStyle: 'text-gray-500 bg-transparent' 
  },
  { 
    label: 'Pending Evaluations', 
    value: '89', 
    tag: 'CRITICAL', 
    icon: ClipboardList, 
    color: 'text-red-500', 
    bg: 'bg-red-50', 
    line: 'bg-red-500', 
    tagStyle: 'text-white bg-[#dc2626] px-2 py-0.5 rounded-full' 
  },
]

export function ContestsMetrics() {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, i) => (
        <div key={i} className="relative rounded-xl border border-gray-100/50 bg-[#f4f8eb] p-6 shadow-sm overflow-hidden flex flex-col justify-between h-[140px]">
          {/* Left accent line */}
          <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${stat.line}`}></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className={`flex items-center justify-center rounded-lg p-2.5 ${stat.bg} ${stat.color}`}>
               <stat.icon className="h-5 w-5" />
            </div>
            <span className={`text-[9px] uppercase font-extrabold tracking-widest ${stat.tagStyle}`}>
              {stat.tag}
            </span>
          </div>

          <div>
            <p className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</p>
            <p className="text-xs font-semibold text-gray-500 mt-1">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
