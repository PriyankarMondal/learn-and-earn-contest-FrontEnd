import { createContext, useContext, useState, useEffect } from 'react'
import { apiRequest } from '../api/fetch'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (!isLoggedIn) {
        setLoading(false)
        return
      }
      try {
        const data = await apiRequest('/auth/v1/me', 'GET')
        
        // Successfully fetch user profile
        setUser({
          id: data._id || data.id,
          name: data.name || data.username || 'User',
          email: data.email || '',
          role: data.role || 'Student',
          number: data.number || '',
          avatar: data.avatar || null,
        })
      } catch (error) {
        console.error('Failed to fetch user profile:', error)
        // Token invalid/expired — clear login state
        clearAuthState()
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const clearAuthState = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    setUser(null)
  }

  const logout = async () => {
    try {
      // Call logout API to clear tokens on backend
      await apiRequest('/auth/v1/logout', 'GET')
    } catch (error) {
      console.error('Logout API failed:', error)
      // Continue with local logout even if API fails
    } finally {
      clearAuthState()
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
