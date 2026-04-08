import { DashboardLayout } from '../components/layout/DashboardLayout'
import { ContestFilters } from '../features/student-dashboard/my-contests/ContestFilters'
import { ActiveParticipations } from '../features/student-dashboard/my-contests/ActiveParticipations'
import { DiscoverChallenges } from '../features/student-dashboard/my-contests/DiscoverChallenges'

export function MyContests() {
  return (
    <DashboardLayout userRole="student">
      {/* Top filter pills */}
      <div className="mb-2">
        <ContestFilters />
      </div>

      {/* Middle active participations block */}
      <ActiveParticipations />

      {/* Bottom discover challenges grid */}
      <DiscoverChallenges />
    </DashboardLayout>
  )
}
