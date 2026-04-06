import { Users, Zap, ClipboardList, Wallet } from 'lucide-react'

const statsData = [
  { label: 'Joined', value: '12', subtext: 'Contests', icon: Users, color: 'text-lime-600', bg: 'bg-[#e7edd3]' },
  { label: 'Active', value: '03', subtext: 'In Progress', icon: Zap, color: 'text-amber-500', bg: 'bg-[#f0ecc5]' },
  { label: 'Submission', value: '01', subtext: 'Pending', icon: ClipboardList, color: 'text-amber-700', bg: 'bg-[#eedbc5]' },
  { label: 'Earnings', value: '₹1,420', subtext: '+8% 📈', icon: Wallet, color: 'text-lime-600', bg: 'bg-[#d3ede2]' },
]

export function StudentStats() {
  return (
    <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {statsData.map((stat) => (
        <div 
          key={stat.label}
          className="flex flex-col relative overflow-hidden rounded-xl border border-[#e2e8d5]/60 bg-[#f1f4e8] p-5 shadow-[inset_0_1px_rgba(255,255,255,0.8)]"
        >
          <div className="mb-4 flex items-start justify-between">
            <div className={`flex h-10 w-10 items-center justify-center rounded shadow-sm ${stat.bg} ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#5c8020]">
              {stat.label}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-black tracking-tight text-gray-900">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{stat.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

