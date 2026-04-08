import { DashboardLayout } from '../../../components/layout/DashboardLayout'
import { adminBottomLinks } from '../../../components/layout/DashboardSidebar'
import { ContestsMetrics } from './ContestsMetrics'
import { ActiveContestsList } from './ActiveContestsList'
import { PendingEvaluationsList } from './PendingEvaluationsList'
import { EliteWinnersPanel } from './EliteWinnersPanel'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminTopbarTabs = () => (
  <nav className="flex items-center gap-6 pt-1">
    <Link to="/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Overview</Link>
    <Link to="/admin/contests" className="text-sm font-bold text-[#82C600] border-b-2 border-[#82C600] pb-2 px-1">Contests</Link>
    <Link to="/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Reports</Link>
  </nav>
)

export function AdminContests() {
  const contestsBottomLinks = [
    ...adminBottomLinks.filter(l => l.label !== 'Logout').map(l => ({ ...l, href: l.href.replace('#', '') })),
    { label: 'Create Contest', icon: Plus, bg: 'bg-[#82C600]', text: 'text-white', href: '/admin/contests' },
    adminBottomLinks.find(l => l.label === 'Logout')
  ].filter(Boolean)

  return (
    <DashboardLayout 
      userRole="admin" 
      bottomLinks={contestsBottomLinks}
      rightNav={<AdminTopbarTabs />}
    >
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
    </DashboardLayout>
  )
}

