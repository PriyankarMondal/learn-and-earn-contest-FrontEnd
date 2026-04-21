import { createContext, useContext, useState } from 'react'

const ParticipationRefreshContext = createContext()

export function ParticipationRefreshProvider({ children }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  return (
    <ParticipationRefreshContext.Provider value={{ refreshTrigger, triggerRefresh }}>
      {children}
    </ParticipationRefreshContext.Provider>
  )
}

export function useParticipationRefresh() {
  const context = useContext(ParticipationRefreshContext)
  if (!context) {
    throw new Error('useParticipationRefresh must be used within ParticipationRefreshProvider')
  }
  return context
}
