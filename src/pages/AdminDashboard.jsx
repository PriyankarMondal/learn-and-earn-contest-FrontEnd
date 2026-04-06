import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { AdminHeader } from '../features/admin-dashboard/dashboard/AdminHeader'
import { AdminStats } from '../features/admin-dashboard/dashboard/AdminStats'
import { ContestManagementTable } from '../features/admin-dashboard/dashboard/ContestManagementTable'
import { PendingEvaluations } from '../features/admin-dashboard/dashboard/PendingEvaluations'
import { AdminSidePanel } from '../features/admin-dashboard/dashboard/AdminSidePanel'

const AdminTopbarTabs = () => (
  <nav className="flex items-center gap-6 pt-1">
    <a href="#/admin" className="text-sm font-bold text-[#82c600] border-b-2 border-[#82c600] pb-2 px-1">Overview</a>
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Analytics</a>
    <a href="#/admin" className="text-sm font-bold text-gray-500 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors">Reports</a>
  </nav>
)

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={adminBottomLinks} userRole="admin" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="admin" rightNav={<AdminTopbarTabs />} />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
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
