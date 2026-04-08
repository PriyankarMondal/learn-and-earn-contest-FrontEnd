import { DashboardLayout } from '../components/layout/DashboardLayout'
import { AdminHeader } from '../features/admin-dashboard/dashboard/AdminHeader'
import { AdminStats } from '../features/admin-dashboard/dashboard/AdminStats'
import { ContestManagementTable } from '../features/admin-dashboard/dashboard/ContestManagementTable'
import { PendingEvaluations } from '../features/admin-dashboard/dashboard/PendingEvaluations'
import { AdminSidePanel } from '../features/admin-dashboard/dashboard/AdminSidePanel'

export function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin">
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
    </DashboardLayout>
  )
}

