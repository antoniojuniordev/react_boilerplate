import React, { createContext, useState } from 'react'
const LoadingContext = createContext('teste')

export function LoadingProvider ({ children }) {
  const [loadingReference, setLoadingReference] = useState('')

  return (
    <LoadingContext.Provider value={{ loadingReference, setLoadingReference }}>
      {children}
    </LoadingContext.Provider>
  )
}
export default LoadingContext
