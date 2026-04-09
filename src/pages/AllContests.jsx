import { DashboardLayout } from '../components/layout/DashboardLayout'
import { AllContestsList } from '../features/student-dashboard/all-contests/AllContestsList'

export function AllContests() {
  return (
    <DashboardLayout userRole="student">
      <AllContestsList />
    </DashboardLayout>
  )
}
