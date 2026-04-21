import { useState, useEffect } from 'react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { SubmissionsHeader } from '../features/student-dashboard/submissions/SubmissionsHeader'
import { TopSubmissionCard } from '../features/student-dashboard/submissions/TopSubmissionCard'
import { PreviousSubmissions } from '../features/student-dashboard/submissions/PreviousSubmissions'
import { SubmissionsFooter } from '../features/student-dashboard/submissions/SubmissionsFooter'
import { SubmissionResultsModal } from '../features/student-dashboard/submissions/SubmissionResultsModal'
import { fetchMySubmissions } from '../api/student.api'
import { Loader2 } from 'lucide-react'

export function Submissions() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  // Set initial selected submission to the top reviewed one
  useEffect(() => {
    if (submissions.length > 0 && !selectedSubmission) {
      const topReviewed = [...submissions]
        .filter(s => s.status === 'reviewed')
        .sort((a, b) => b.score - a.score)[0]
      
      setSelectedSubmission(topReviewed || submissions[0])
    }
  }, [submissions, selectedSubmission])

  // Find the top submission (highest score)
  const topSubmission = selectedSubmission || [...submissions]
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
       
       {topSubmission && (
         <TopSubmissionCard 
           submission={topSubmission}
           onViewResults={() => {
             setSelectedSubmission(topSubmission)
             setIsModalOpen(true)
           }}
         />
       )}
       
       <PreviousSubmissions 
         submissions={submissions}
         loading={false}
         onSelectSubmission={setSelectedSubmission}
         onViewResults={(submission) => {
           setSelectedSubmission(submission)
           setIsModalOpen(true)
         }}
       />
       
       <SubmissionsFooter count={submissions.length} />

       {/* Results Modal */}
       <SubmissionResultsModal 
         submission={selectedSubmission}
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
       />
    </DashboardLayout>
  )
}
