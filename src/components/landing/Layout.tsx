import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: '#020d1a' }}>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}