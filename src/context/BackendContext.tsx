import React, { createContext, useContext, ReactNode } from 'react'

export type BackendType = 'java' | 'dotnet' | 'php'

interface BackendConfig {
  name: string
  baseUrl: string
  port: number
}

const BACKEND_CONFIGS: Record<BackendType, BackendConfig> = {
  java: {
    name: 'Java (Spring Boot)',
    baseUrl: 'http://localhost:8080/api',
    port: 8080,
  },
  dotnet: {
    name: '.NET (ASP.NET Core)',
    baseUrl: 'http://localhost:5000/api',
    port: 5000,
  },
  php: {
    name: 'PHP (Laravel)',
    baseUrl: 'http://localhost:8000/api',
    port: 8000,
  },
}

interface BackendContextValue {
  backend: BackendType
  config: BackendConfig
}

const BackendContext = createContext<BackendContextValue | null>(null)

export function BackendProvider({ 
  backend, 
  children 
}: { 
  backend: BackendType
  children: ReactNode 
}) {
  const config = BACKEND_CONFIGS[backend]
  
  return (
    <BackendContext.Provider value={{ backend, config }}>
      {children}
    </BackendContext.Provider>
  )
}

export function useBackend(): BackendContextValue {
  const context = useContext(BackendContext)
  if (!context) {
    throw new Error('useBackend must be used within a BackendProvider')
  }
  return context
}

export { BACKEND_CONFIGS }
