import { type InputHTMLAttributes, forwardRef, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
  error?: string
  noIcon?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon, error, noIcon = false, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[7px]">
        {label && (
          <label
            htmlFor={id}
            className="text-[11px] font-semibold tracking-[0.7px] uppercase text-[var(--color-text-muted)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && !noIcon && (
            <span className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none flex items-center">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              'nova-input w-full bg-[var(--color-input)] border border-[var(--color-border-mid)]',
              'rounded-[var(--radius-sm)] text-sm text-[var(--color-text-primary)]',
              'placeholder:text-[var(--color-text-muted)] transition-all duration-200',
              icon && !noIcon ? 'py-[11px] pr-3 pl-[38px]' : 'px-3 py-[11px]',
              error ? 'border-[var(--color-error)]' : '',
              className,
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-[11px] text-[var(--color-error)]">{error}</p>
        )}
      </div>
    )
  },
)

InputField.displayName = 'InputField'
