import { Award, Users, Activity, AlertCircle } from 'lucide-react'

const adminStatsData = [
  { label: 'Metrics', value: '142', subval: 'Total Contests', icon: Award, text: 'text-lime-600', line: 'bg-lime-500', labelBg: 'bg-[#f0f6e6]' },
  { label: 'Reach', value: '18.5k', subval: 'Total Participants', icon: Users, text: 'text-amber-500', line: 'bg-amber-400', labelBg: 'bg-[#fff7ed]' },
  { label: 'Activity', value: '1,234', subval: 'Submissions Received', icon: Activity, text: 'text-lime-600', line: 'bg-lime-500', labelBg: 'bg-[#ecfdf5]' },
  { label: 'Attention', value: '89', subval: 'Pending Evaluations', icon: AlertCircle, text: 'text-red-500', line: 'bg-red-500', labelBg: 'bg-[#fef2f2]' },
]

export function AdminStats() {
  return (
    <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {adminStatsData.map((stat) => (
        <div key={stat.label} className="relative rounded-xl border border-gray-100/50 bg-[#f4f8eb] p-6 shadow-sm overflow-hidden">
          {/* Left border accent line */}
          <div className={`absolute top-0 bottom-0 left-0 w-[5px] ${stat.line} rounded-l-xl`}></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={`flex items-center justify-center rounded-lg bg-gray-50 p-2 ${stat.text}`}>
               <stat.icon className="h-5 w-5" />
            </div>
            <span className={`px-2 py-0.5 rounded text-[8px] uppercase font-extrabold tracking-widest text-gray-500 ${stat.labelBg}`}>{stat.label}</span>
          </div>

          <p className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</p>
          <p className="text-xs font-semibold text-gray-500 mt-1">{stat.subval}</p>
        </div>
      ))}
    </div>
  )
}

