import { Users, GraduationCap, ShieldCheck, AlertCircle } from 'lucide-react'

export function UsersStats() {
  const stats = [
    { label: 'Total Users', value: '2,548', tag: '+12%', icon: Users, accent: 'bg-[#82c600]' },
    { label: 'Active Students', value: '1,892', tag: 'ACTIVE', icon: GraduationCap, accent: 'bg-emerald-500' },
    { label: 'Administrators', value: '12', icon: ShieldCheck, accent: 'bg-lime-600' },
    { label: 'Pending Verification', value: '128', icon: AlertCircle, accent: 'bg-amber-400', critical: true },
  ]

  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="relative rounded-2xl border border-gray-100/50 bg-[#f4f8eb] p-6 shadow-sm overflow-hidden flex flex-col justify-between h-[155px]">
          {/* Left accent line */}
          <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${stat.accent}`}></div>
          
          <div className="flex justify-between items-start mb-6">
            <div className={`p-2 rounded-lg bg-white/50 border border-gray-100 shadow-sm ${stat.critical ? 'text-amber-500' : 'text-lime-600'}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            {stat.tag && (
              <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded ${stat.tag === '+12%' ? 'text-lime-600 bg-lime-50/50' : 'text-emerald-600 bg-emerald-50/50'}`}>
                {stat.tag}
              </span>
            )}
            {stat.critical && <AlertCircle className="h-5 w-5 text-amber-500" />}
          </div>

          <div>
             <p className="text-sm font-bold text-gray-500 mb-0.5">{stat.label}</p>
             <p className="text-4xl font-black text-gray-900 leading-none">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
