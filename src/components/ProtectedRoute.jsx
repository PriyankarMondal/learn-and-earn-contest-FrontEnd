import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export function ProtectedRoute({ children, requiredRole = null }) {
  const { user, loading } = useUser()

  // Show loading spinner while auth state is being determined
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // If role is required and doesn't match, redirect to appropriate dashboard
  if (requiredRole) {
    const userRole = user.role?.toLowerCase()
    const requiredRoleLower = requiredRole.toLowerCase()
    
    if (userRole !== requiredRoleLower) {
      // Redirect admin trying to access student routes to admin dashboard
      if (userRole === 'admin') {
        return <Navigate to="/admin" replace />
      }
      // Redirect student trying to access admin routes to student dashboard
      if (userRole === 'student') {
        return <Navigate to="/dashboard" replace />
      }
      // Unknown role, redirect to login
      return <Navigate to="/login" replace />
    }
  }

  // User is authenticated and has correct role, render the component
  return children
}
