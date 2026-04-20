import { useState, useEffect } from 'react'
import { Users, Zap, ClipboardList, Wallet, Loader2 } from 'lucide-react'
import { fetchDashboardStats } from '../../../api/student.api'
import { toast } from 'react-toastify'

export function StudentStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats()
        setStats(data.stats)
      } catch (err) {
        console.error('Failed to load student stats:', err)
        toast.error('Failed to load dashboard statistics')
      } finally {
        setLoading(false)
      }
    }
    loadStats()
  }, [])

  const statsData = [
    { 
      label: 'Joined', 
      value: stats?.joined || '00', 
      subtext: 'Contests', 
      icon: Users, 
      color: 'text-lime-600', 
      bg: 'bg-[#e7edd3]' 
    },
    { 
      label: 'Active', 
      value: stats?.active || '00', 
      subtext: 'In Progress', 
      icon: Zap, 
      color: 'text-amber-500', 
      bg: 'bg-[#f0ecc5]' 
    },
    { 
      label: 'Submission', 
      value: stats?.pending || '00', 
      subtext: 'Pending', 
      icon: ClipboardList, 
      color: 'text-amber-700', 
      bg: 'bg-[#eedbc5]' 
    },
    { 
      label: 'Earnings', 
      value: stats?.earnings || '₹0', 
      subtext: stats?.rank ? `Rank #${stats.rank}` : 'Keep going! 📈', 
      icon: Wallet, 
      color: 'text-lime-600', 
      bg: 'bg-[#d3ede2]' 
    },
  ]

  if (loading) {
    return (
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 animate-pulse">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-32 bg-slate-100 rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {statsData.map((stat) => (
        <div 
          key={stat.label}
          className="flex flex-col relative overflow-hidden rounded-xl border border-[#e2e8d5]/60 bg-[#f1f4e8] p-5 shadow-[inset_0_1px_rgba(255,255,255,0.8)] transition-all hover:shadow-md"
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
