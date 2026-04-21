import { useState, useEffect } from 'react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { WelcomeBanner } from '../features/student-dashboard/dashboard/WelcomeBanner'
import { StudentStats } from '../features/student-dashboard/dashboard/StudentStats'
import { ActiveContestsList } from '../features/student-dashboard/dashboard/ActiveContestsList'
import { SubmissionsSidePanel } from '../features/student-dashboard/dashboard/SubmissionsSidePanel'
import { useUser } from '../context/UserContext'
import { fetchDashboardStats } from '../api/student.api'

export function StudentDashboard() {
  const { user } = useUser()
  const [dashboardStats, setDashboardStats] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardStats()
        setDashboardStats(data.stats)
      } catch (err) {
        console.error('Failed to load dashboard data:', err)
      }
    }
    loadData()
  }, [])

  return (
    <DashboardLayout userRole="student">
      <WelcomeBanner 
        userName={user?.name || 'Student'} 
        earnings={dashboardStats?.earnings || '₹0'} 
      />
      <StudentStats />

      <div className="flex flex-col xl:flex-row xl:items-start gap-8">
        {/* Left Column (Main Content) */}
        <div className="flex-1 min-w-0">
          <ActiveContestsList />
        </div>

        {/* Right Column (Side Panels) */}
        <div className="w-full xl:w-[320px] shrink-0">
          <SubmissionsSidePanel />
        </div>
      </div>
    </DashboardLayout>
  )
}
