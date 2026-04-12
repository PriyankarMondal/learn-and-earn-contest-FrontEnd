import { DashboardLayout } from '../components/layout/DashboardLayout'
import { LeaderboardTable } from '../features/admin-dashboard/leaderboard/LeaderboardTable'

export function AdminLeaderboard() {
  return (
    <DashboardLayout userRole="admin">
      <div className="pb-10">
        <LeaderboardTable />
      </div>
    </DashboardLayout>
  )
}
