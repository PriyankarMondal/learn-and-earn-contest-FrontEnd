import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export function Logout() {
  const navigate = useNavigate()
  const { logout } = useUser()

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call logout from context (calls API + clears local state)
        await logout()
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        // Always redirect to home after logout attempt
        navigate('/', { replace: true })
      }
    }

    performLogout()
  }, [navigate, logout])

  // Show loading state while logout is in progress
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <p className="mt-4 text-gray-600">Logging out...</p>
      </div>
    </div>
  )
}
