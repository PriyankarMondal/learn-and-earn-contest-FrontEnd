import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../api/auth.api'

export function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    // 1. Clear local state IMMEDIATELY
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    
    // 2. Fire and forget the backend logout
    logoutUser().catch(err => console.error('Background logout error:', err))

    // 3. Redirect instantly
    navigate('/')
    window.location.reload()
  }, [navigate])

  return null // No UI, instant transition
}
