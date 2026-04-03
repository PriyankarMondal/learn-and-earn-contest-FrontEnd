import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { AdminHeader } from '../features/admin-dashboard/AdminHeader'
import { AdminStats } from '../features/admin-dashboard/AdminStats'
import { ContestManagementTable } from '../features/admin-dashboard/ContestManagementTable'
import { PendingEvaluations } from '../features/admin-dashboard/PendingEvaluations'
import { AdminSidePanel } from '../features/admin-dashboard/AdminSidePanel'

const AdminTopbarTabs = () => (
  <nav className="flex gap-6 relative top-0.5">
    <a href="#/admin" className="text-sm font-bold text-[#82c600] border-b-2 border-[#82c600] pb-6 px-1">Overview</a>
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 pb-6 px-1 transition-colors">Analytics</a>
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 pb-6 px-1 transition-colors">Reports</a>
  </nav>
)

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={adminBottomLinks} userRole="admin" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="admin" leftContent={<AdminTopbarTabs />} />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <AdminHeader />
            <AdminStats />

            <div className="flex flex-col xl:flex-row xl:items-start gap-8">
              {/* Left Column */}
              <div className="flex-1 min-w-0">
                <ContestManagementTable />
                <PendingEvaluations />
              </div>

              {/* Right Column */}
              <div className="w-full xl:w-[340px] shrink-0">
                <AdminSidePanel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
