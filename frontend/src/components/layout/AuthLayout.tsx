import type { ReactNode } from 'react'

interface AuthLayoutProps {
  brandPanel: ReactNode
  formPanel: ReactNode
}

export function AuthLayout({ brandPanel, formPanel }: AuthLayoutProps) {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">
        <div
          className={[
            'grid w-full max-w-[960px] overflow-hidden',
            'bg-[var(--color-card)] rounded-[var(--radius-lg)]',
            'border border-[var(--color-border-subtle)]',
            'shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_64px_rgba(0,0,0,0.6)]',
            'grid-cols-1 md:grid-cols-[1fr_420px]',
          ].join(' ')}
        >
          {brandPanel}
          {formPanel}
        </div>
      </div>
    </>
  )
}
