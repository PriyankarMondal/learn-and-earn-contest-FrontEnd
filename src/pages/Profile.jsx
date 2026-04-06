import { DashboardSidebar, studentSidebarLinks, studentBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { ProfileHeader } from '../features/student-dashboard/profile/ProfileHeader'
import { PersonalDetails } from '../features/student-dashboard/profile/PersonalDetails'
import { AccountSettings } from '../features/student-dashboard/profile/AccountSettings'
import { AcademicSummary } from '../features/student-dashboard/profile/AcademicSummary'
import { EurekaMoment } from '../features/student-dashboard/profile/EurekaMoment'

export function Profile() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={studentSidebarLinks} bottomLinks={studentBottomLinks} userRole="student" />
      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="student" />
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
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
          </div>
        </div>
      </main>
    </div>
  )
}
