import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../api/auth.api'

export function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    async function performLogout() {
      // 1. Clear local state immediately
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userRole')
      localStorage.removeItem('userId')
      
      try {
        // 2. Call backend to invalidate session (fire and forget or short wait)
        await logoutUser()
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        // 3. Redirect instantly
        navigate('/')
        window.location.reload()
      }
    }

    performLogout()
  }, [navigate])

  return null // No UI, instant transition
}
