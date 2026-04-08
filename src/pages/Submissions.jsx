import { DashboardLayout } from '../components/layout/DashboardLayout'
import { SubmissionsHeader } from '../features/student-dashboard/submissions/SubmissionsHeader'
import { TopSubmissionCard } from '../features/student-dashboard/submissions/TopSubmissionCard'
import { PreviousSubmissions } from '../features/student-dashboard/submissions/PreviousSubmissions'
import { SubmissionsFooter } from '../features/student-dashboard/submissions/SubmissionsFooter'

export function Submissions() {
  return (
    <DashboardLayout userRole="student">
       <SubmissionsHeader />
       <TopSubmissionCard />
       <PreviousSubmissions />
       <SubmissionsFooter />
    </DashboardLayout>
  )
}
