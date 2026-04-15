import { DashboardLayout } from '../components/layout/DashboardLayout'
import { adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { SubmissionsHeader } from '../features/admin-dashboard/submissions/SubmissionsHeader'
import { SubmissionsStats } from '../features/admin-dashboard/submissions/SubmissionsStats'
import { SubmissionsFilters } from '../features/admin-dashboard/submissions/SubmissionsFilters'
import { SubmissionsTable } from '../features/admin-dashboard/submissions/SubmissionsTable'
import { SubmissionsFooter } from '../features/admin-dashboard/submissions/SubmissionsFooter'
import { Plus } from 'lucide-react'

export function AdminSubmissions() {
  const submissionsBottomLinks = [
    ...adminBottomLinks.filter(l => l.label !== 'Logout').map(l => ({ ...l, href: l.href.replace('#', '') })),
    { label: 'Create New Contest', icon: Plus, bg: 'bg-[#4d6b00]', text: 'text-white', href: '/admin/submissions' },
    adminBottomLinks.find(l => l.label === 'Logout')
  ].filter(Boolean)

  return (
    <DashboardLayout 
      userRole="admin" 
      bottomLinks={submissionsBottomLinks}
    >
      <SubmissionsHeader />
      <SubmissionsStats />
      <SubmissionsFilters />
      <SubmissionsTable />
      <SubmissionsFooter />
    </DashboardLayout>
  )
}
