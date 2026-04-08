import { DashboardLayout } from '../components/layout/DashboardLayout'

export function AdminLeaderboard() {
  return (
    <DashboardLayout userRole="admin">
        <div className="flex-1 overflow-auto flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-400">Elite Leaderboard Section</h2>
                <p className="text-sm text-gray-400">Coming soon...</p>
            </div>
        </div>
    </DashboardLayout>
  )
}
