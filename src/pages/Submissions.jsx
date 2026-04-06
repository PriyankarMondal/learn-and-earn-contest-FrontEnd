import { DashboardSidebar, studentSidebarLinks, studentBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { SubmissionsHeader } from '../features/student-dashboard/submissions/SubmissionsHeader'
import { TopSubmissionCard } from '../features/student-dashboard/submissions/TopSubmissionCard'
import { PreviousSubmissions } from '../features/student-dashboard/submissions/PreviousSubmissions'
import { SubmissionsFooter } from '../features/student-dashboard/submissions/SubmissionsFooter'

export function Submissions() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={studentSidebarLinks} bottomLinks={studentBottomLinks} userRole="student" />
      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="student" />
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
             <SubmissionsHeader />
             <TopSubmissionCard />
             <PreviousSubmissions />
             <SubmissionsFooter />
          </div>
        </div>
      </main>
    </div>
  )
}
