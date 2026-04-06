import { DashboardSidebar, studentSidebarLinks, studentBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { ContestFilters } from '../features/student-dashboard/my-contests/ContestFilters'
import { ActiveParticipations } from '../features/student-dashboard/my-contests/ActiveParticipations'
import { DiscoverChallenges } from '../features/student-dashboard/my-contests/DiscoverChallenges'

export function MyContests() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      {/* 
        We are reusing the exact same sidebar configuration to keep the left panel completely untouched 
      */}
      <DashboardSidebar links={studentSidebarLinks} bottomLinks={studentBottomLinks} userRole="student" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="student" />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Top filter pills */}
            <div className="mb-2">
              <ContestFilters />
            </div>

            {/* Middle active participations block */}
            <ActiveParticipations />

            {/* Bottom discover challenges grid */}
            <DiscoverChallenges />
          </div>
        </div>
      </main>
    </div>
  )
}
