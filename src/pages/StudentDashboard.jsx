import { DashboardSidebar, studentSidebarLinks, studentBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { WelcomeBanner } from '../features/student-dashboard/dashboard/WelcomeBanner'
import { StudentStats } from '../features/student-dashboard/dashboard/StudentStats'
import { ActiveContestsList } from '../features/student-dashboard/dashboard/ActiveContestsList'
import { SubmissionsSidePanel } from '../features/student-dashboard/dashboard/SubmissionsSidePanel'
import { RecentActivity } from '../features/student-dashboard/dashboard/RecentActivity'
import { PastContestsTable } from '../features/student-dashboard/dashboard/PastContestsTable'

export function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={studentSidebarLinks} bottomLinks={studentBottomLinks} userRole="student" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="student" />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <WelcomeBanner userName="Alex Rivera" earnings="₹1,420" />
            <StudentStats />

            <div className="flex flex-col xl:flex-row xl:items-start gap-8">
              {/* Left Column (Main Content) */}
              <div className="flex-1 min-w-0">
                <ActiveContestsList />
                <RecentActivity />
                <PastContestsTable />
              </div>

              {/* Right Column (Side Panels) */}
              <div className="w-full xl:w-[320px] shrink-0">
                <SubmissionsSidePanel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
