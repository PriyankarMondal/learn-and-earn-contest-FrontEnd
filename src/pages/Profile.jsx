import { useState, useEffect } from 'react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { ProfileHeader } from '../features/student-dashboard/profile/ProfileHeader'
import { PersonalDetails } from '../features/student-dashboard/profile/PersonalDetails'
import { AccountSettings } from '../features/student-dashboard/profile/AccountSettings'
import { AcademicSummary } from '../features/student-dashboard/profile/AcademicSummary'
import { EurekaMoment } from '../features/student-dashboard/profile/EurekaMoment'
import { apiRequest } from '../api/fetch'
import { Loader2 } from 'lucide-react'

export function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const data = await apiRequest('/auth/v1/me')
      setUser(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <DashboardLayout userRole="student">
        <div className="flex h-screen items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#82C600]" />
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="student" userName={user?.name}>
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          <ProfileHeader user={user} />
          <PersonalDetails user={user} onUpdate={fetchProfile} />
          <AccountSettings user={user} />
        </div>

        {/* Sidebar Column */}
        <div className="w-full xl:w-[320px] shrink-0">
          <AcademicSummary user={user} />
          <EurekaMoment />
        </div>
      </div>
    </DashboardLayout>
  )
}
