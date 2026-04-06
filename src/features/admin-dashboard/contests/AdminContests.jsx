import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../../../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../../../components/layout/DashboardTopbar'
import { ContestsMetrics } from './ContestsMetrics'
import { ActiveContestsList } from './ActiveContestsList'
import { PendingEvaluationsList } from './PendingEvaluationsList'
import { EliteWinnersPanel } from './EliteWinnersPanel'
import { Plus } from 'lucide-react'

const AdminTopbarTabs = () => (
  <nav className="flex items-center gap-6 pt-1">
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Overview</a>
    <a href="#/admin/contests" className="text-sm font-bold text-[#82C600] border-b-2 border-[#82C600] pb-2 px-1">Contests</a>
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Reports</a>
  </nav>
)

export function AdminContests() {
  const contestsBottomLinks = [
    ...adminBottomLinks.filter(l => l.label !== 'Logout'),
    { label: 'Create Contest', icon: Plus, bg: 'bg-[#82C600]', text: 'text-white', href: '#/admin/contests' },
    adminBottomLinks.find(l => l.label === 'Logout')
  ].filter(Boolean)

  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={contestsBottomLinks} userRole="admin" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar
          userRole="admin"
          rightNav={<AdminTopbarTabs />}
        />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            <ContestsMetrics />

            <div className="flex flex-col xl:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1 min-w-0">
                <ActiveContestsList />
                <PendingEvaluationsList />
              </div>

              {/* Right Column */}
              <div className="w-full xl:w-[320px] shrink-0">
                <EliteWinnersPanel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

