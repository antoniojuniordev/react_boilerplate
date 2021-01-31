import React, { createContext } from 'react'
const SessionContext = createContext({ loading: false })

export function SessionProvider ({ children }) {
  return (
    <SessionContext.Provider value={{ session: false }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContext
