import { createContext, ReactNode, useState } from 'react'

interface ISidebarContextType {
  isVisible: boolean
  toggleSidebar: () => void
}

interface ISidebarContextProps {
  children: ReactNode
}

export const SidebarContext = createContext({} as ISidebarContextType)

export function SidebarProvider({ children }: ISidebarContextProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  function toggleSidebar() {
    setIsVisible(!isVisible)
  }

  return (
    <SidebarContext.Provider value={{ isVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
