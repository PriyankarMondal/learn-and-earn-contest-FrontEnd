import { useState, useEffect } from 'react'
import { Users, GraduationCap, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function UsersStats() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const users = await apiRequest('/auth/v1/getAllUser')
        const students = users.filter(u => u.role === 'Student')
        const admins = users.filter(u => u.role === 'Admin')
        const active = students.filter(u => u.isVerified).length
        const pending = students.filter(u => !u.isVerified).length

        setData({
          total: users.length,
          students: students.length,
          admins: admins.length,
          active,
          pending
        })
      } catch (err) {
        console.error('Failed to fetch user stats:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const stats = [
    { label: 'Total Users', value: data?.total || 0, tag: 'PLATFORM', icon: Users, accent: 'bg-[#82C600]' },
    { label: 'Active Students', value: data?.students || 0, tag: 'STUDENTS', icon: GraduationCap, accent: 'bg-lime-500' },
    { label: 'Administrators', value: data?.admins || 0, icon: ShieldCheck, accent: 'bg-lime-600' },
    { label: 'Pending Verification', value: data?.pending || 0, icon: AlertCircle, accent: 'bg-amber-400', critical: data?.pending > 0 },
  ]

  if (loading) {
    return (
      <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-[155px] animate-pulse bg-white rounded-2xl border border-gray-100 flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin text-gray-200" />
          </div>
        ))}
      </div>
    )
  }

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
              <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded text-lime-600 bg-lime-50/50`}>
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


