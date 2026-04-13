import { useState, useEffect } from 'react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { SubmissionsHeader } from '../features/student-dashboard/submissions/SubmissionsHeader'
import { TopSubmissionCard } from '../features/student-dashboard/submissions/TopSubmissionCard'
import { PreviousSubmissions } from '../features/student-dashboard/submissions/PreviousSubmissions'
import { SubmissionsFooter } from '../features/student-dashboard/submissions/SubmissionsFooter'
import { fetchMySubmissions } from '../api/student.api'
import { Loader2 } from 'lucide-react'

export function Submissions() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMySubmissions()
        setSubmissions(data)
      } catch (error) {
        console.error('Failed to load submissions:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Find the top submission (highest score)
  const topSubmission = [...submissions]
    .filter(s => s.status === 'reviewed')
    .sort((a, b) => b.score - a.score)[0]

  if (loading) {
    return (
      <DashboardLayout userRole="student">
        <div className="flex h-[60vh] items-center justify-center">
          <Loader2 className="w-10 h-10 text-[#82C600] animate-spin" />
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="student">
       <SubmissionsHeader count={submissions.length} />
       
       {topSubmission && <TopSubmissionCard submission={topSubmission} />}
       
       <PreviousSubmissions 
         submissions={submissions} 
         loading={false} 
       />
       
       <SubmissionsFooter count={submissions.length} />
    </DashboardLayout>
  )
}
