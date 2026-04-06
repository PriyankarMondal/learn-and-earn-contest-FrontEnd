import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { SubmissionsHeader } from '../features/admin-dashboard/submissions/SubmissionsHeader'
import { SubmissionsStats } from '../features/admin-dashboard/submissions/SubmissionsStats'
import { SubmissionsFilters } from '../features/admin-dashboard/submissions/SubmissionsFilters'
import { SubmissionsTable } from '../features/admin-dashboard/submissions/SubmissionsTable'
import { SubmissionsFooter } from '../features/admin-dashboard/submissions/SubmissionsFooter'
import { Plus } from 'lucide-react'

export function AdminSubmissions() {
  const submissionsBottomLinks = [
    ...adminBottomLinks.filter(l => l.label !== 'Logout'),
    { label: 'Create New Contest', icon: Plus, bg: 'bg-[#4d6b00]', text: 'text-white', href: '#/admin/submissions' },
    adminBottomLinks.find(l => l.label === 'Logout')
  ].filter(Boolean)

  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={submissionsBottomLinks} userRole="admin" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar 
          userRole="admin" 
          rightNav={
            <div className="flex items-center gap-4">
               <div className="text-right">
                  <div className="text-xs font-black text-gray-900 uppercase tracking-tight">Admin User</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Chief Academic Officer</div>
               </div>
            </div>
          } 
        />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            <SubmissionsHeader />
            <SubmissionsStats />
            <SubmissionsFilters />
            <SubmissionsTable />
            <SubmissionsFooter />
          </div>
        </div>
      </main>
    </div>
  )
}
