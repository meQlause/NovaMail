import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: [
        'bg-gradient-to-br from-[#63b3ed] to-[#3a7bd5] text-white border-none',
        'shadow-[0_4px_20px_rgba(99,179,237,0.25)]',
        'hover:opacity-90 hover:shadow-[0_6px_28px_rgba(99,179,237,0.38)] hover:-translate-y-px',
        'font-[family-name:var(--font-display)] tracking-[0.3px]',
      ].join(' '),
      ghost: [
        'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-mid)]',
        'hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]',
      ].join(' '),
      icon: [
        'bg-transparent text-[var(--color-text-muted)] border-none p-1.5 rounded',
        'hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]',
      ].join(' '),
    }

    const sizes = {
      sm: 'px-3 py-2 text-[13px] rounded-[var(--radius-xs)]',
      md: 'px-4 py-[13px] text-sm rounded-[var(--radius-sm)]',
      lg: 'px-5 py-3.5 text-[15px] rounded-[var(--radius-sm)]',
    }

    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          variant !== 'icon' ? sizes[size] : '',
          fullWidth ? 'w-full' : '',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
