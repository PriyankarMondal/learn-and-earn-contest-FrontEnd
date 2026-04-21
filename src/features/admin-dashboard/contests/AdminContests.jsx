import { useState } from 'react'
import { DashboardLayout } from '../../../components/layout/DashboardLayout'
import { adminBottomLinks } from '../../../components/layout/DashboardSidebar'
import { ContestsMetrics } from './ContestsMetrics'
import { ActiveContestsList } from './ActiveContestsList'
import { PendingEvaluationsList } from './PendingEvaluationsList'
import { CreateContestModal } from './CreateContestModal'
import { Plus } from 'lucide-react'

export function AdminContests() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const contestsBottomLinks = [
    ...adminBottomLinks.filter(l => l.label !== 'Logout').map(l => ({ ...l, href: l.href.replace('#', '') })),
    { 
      label: 'Create Contest', 
      icon: Plus, 
      bg: 'bg-[#82C600]', 
      text: 'text-white', 
      onClick: () => setIsCreateModalOpen(true) 
    },
    adminBottomLinks.find(l => l.label === 'Logout')
  ].filter(Boolean)

  return (
    <DashboardLayout 
      userRole="admin" 
      bottomLinks={contestsBottomLinks}
    >
      <ContestsMetrics />

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 min-w-0">
          <ActiveContestsList />
          <PendingEvaluationsList />
        </div>
      </div>

      {isCreateModalOpen && (
        <CreateContestModal onClose={() => setIsCreateModalOpen(false)} />
      )}
    </DashboardLayout>
  )
}

