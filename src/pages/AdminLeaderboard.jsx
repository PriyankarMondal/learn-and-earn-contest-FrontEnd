import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'

export function AdminLeaderboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={adminBottomLinks} userRole="admin" />
      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar userRole="admin" />
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-400">Elite Leaderboard Section</h2>
                <p className="text-sm text-gray-400">Coming soon...</p>
            </div>
        </div>
      </main>
    </div>
  )
}
