import { useEffect, useState } from 'react'
import { fetchDashboardStats } from '../../../api/admin.api'

export function SubmissionsStats() {
  const [stats, setStats] = useState([
    { label: 'TOTAL SUBMISSIONS', value: '0', trend: '~0%', trendColor: 'text-lime-600', accent: 'bg-lime-500' },
    { label: 'PENDING EVALUATION', value: '0', tag: 'CRITICAL', tagBg: 'bg-[#dc2626]', accent: 'bg-[#dc2626]' },
    { label: 'EVALUATED TODAY', value: '0', subtext: '/ daily goal 30', accent: 'bg-lime-500' },
    { label: 'WINNER SLOTS FILLED', value: '0/42', progress: 0, accent: 'bg-amber-400' },
  ])

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats()
        setStats([
          { 
            label: 'TOTAL SUBMISSIONS', 
            value: data.totalSubmissions?.toLocaleString() || '0', 
            trend: '~12%', 
            trendColor: 'text-lime-600', 
            accent: 'bg-lime-500' 
          },
          { 
            label: 'PENDING EVALUATION', 
            value: data.pendingEvaluations?.toString() || '0', 
            tag: data.pendingEvaluations > 50 ? 'CRITICAL' : null, 
            tagBg: 'bg-[#dc2626]', 
            accent: 'bg-[#dc2626]' 
          },
          { 
            label: 'EVALUATED TODAY', 
            value: data.evaluatedToday?.toString() || '0', 
            subtext: '/ daily goal 30', 
            accent: 'bg-lime-500' 
          },
          { 
            label: 'WINNER SLOTS FILLED', 
            value: data.winnerSlotsFilled || '0/42', 
            progress: data.winnerProgress || 0, 
            accent: 'bg-amber-400' 
          },
        ])
      } catch (error) {
        console.error('Failed to load dashboard stats:', error)
      }
    }
    loadStats()
  }, [])

  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="relative rounded-2xl border border-gray-100/50 bg-[#f4f8eb] p-6 shadow-sm overflow-hidden flex flex-col justify-between h-[155px]">
          {/* Left accent line */}
          <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${stat.accent}`}></div>
          
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">{stat.label}</span>
            {stat.trend && <span className={`text-xs font-bold ${stat.trendColor}`}>{stat.trend}</span>}
            {stat.tag && <span className={`text-[9px] font-black text-white px-2 py-0.5 rounded ${stat.tagBg}`}>{stat.tag}</span>}
          </div>

          <div>
             <div className="flex items-end gap-2">
               <p className="text-4xl font-black text-gray-900 leading-none">{stat.value}</p>
               {stat.subtext && <p className="text-[11px] font-bold text-gray-400 pb-1">{stat.subtext}</p>}
             </div>
             {stat.progress !== undefined && (
               <div className="mt-3 h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
                 <div className="h-full bg-amber-400" style={{ width: `${stat.progress}%` }}></div>
               </div>
             )}
          </div>
        </div>
      ))}
    </div>
  )
}

