import { useState, useEffect } from 'react'
import { Layout, Users, FileText, CheckCircle, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function AdminStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiRequest('/admin/v1/dashboard')
        setStats(data)
      } catch (err) {
        console.error('Stats fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const statsItems = [
    { label: 'Pending Evaluations', value: stats?.pendingEvaluations || 0, icon: FileText, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Total Participants', value: stats?.totalParticipants || 0, icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Elite Winners', value: stats?.eliteWinners || 0, icon: CheckCircle, color: 'text-lime-600', bg: 'bg-lime-50' },
    { label: 'Active Challenges', value: stats?.activeContestsCount || 0, icon: Layout, color: 'text-violet-600', bg: 'bg-violet-50' },
  ]

  if (loading) {
     return (
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
         {[1,2,3,4].map(i => (
           <div key={i} className="h-24 animate-pulse bg-white rounded-2xl border border-gray-100 flex items-center justify-center">
             <Loader2 className="h-5 w-5 animate-spin text-gray-200" />
           </div>
         ))}
       </div>
     )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      {statsItems.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5 transition-all hover:shadow-md text-left">
          <div className={`p-4 rounded-xl ${item.bg} ${item.color}`}>
            <item.icon className="h-6 w-6" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
            <div className="text-2xl font-black text-gray-900 leading-none">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
