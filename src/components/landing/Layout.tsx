import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const BG_IMAGE = "https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/ab4cdf60-ed42-4f7b-88d1-59e236f384ea.jpg"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(2, 13, 26, 0.72)' }} />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}