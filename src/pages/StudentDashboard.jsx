import { DashboardLayout } from '../components/layout/DashboardLayout'
import { WelcomeBanner } from '../features/student-dashboard/dashboard/WelcomeBanner'
import { StudentStats } from '../features/student-dashboard/dashboard/StudentStats'
import { ActiveContestsList } from '../features/student-dashboard/dashboard/ActiveContestsList'
import { SubmissionsSidePanel } from '../features/student-dashboard/dashboard/SubmissionsSidePanel'
import { RecentActivity } from '../features/student-dashboard/dashboard/RecentActivity'
import { PastContestsTable } from '../features/student-dashboard/dashboard/PastContestsTable'

export function StudentDashboard() {
  return (
    <DashboardLayout userRole="student">
      <WelcomeBanner userName="Priyankar Mondal" earnings="₹1,420" />
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
    </DashboardLayout>
  )
}
