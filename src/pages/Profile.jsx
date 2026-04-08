import { DashboardLayout } from '../components/layout/DashboardLayout'
import { ProfileHeader } from '../features/student-dashboard/profile/ProfileHeader'
import { PersonalDetails } from '../features/student-dashboard/profile/PersonalDetails'
import { AccountSettings } from '../features/student-dashboard/profile/AccountSettings'
import { AcademicSummary } from '../features/student-dashboard/profile/AcademicSummary'
import { EurekaMoment } from '../features/student-dashboard/profile/EurekaMoment'

export function Profile() {
  return (
    <DashboardLayout userRole="student">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          <ProfileHeader />
          <PersonalDetails />
          <AccountSettings />
        </div>

        {/* Sidebar Column */}
        <div className="w-full xl:w-[320px] shrink-0">
          <AcademicSummary />
          <EurekaMoment />
        </div>
      </div>
    </DashboardLayout>
  )
}
