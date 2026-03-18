import { Check } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface Step {
  label: string
  status: 'active' | 'done' | 'inactive'
}

interface StepIndicatorProps {
  steps: Step[]
}

export function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center mb-8">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center flex-1">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0',
                'text-[11px] font-semibold font-[family-name:var(--font-display)]',
                step.status === 'active' && [
                  'bg-[var(--color-accent)] text-white',
                  'shadow-[0_0_12px_rgba(99,179,237,0.4)]',
                ].join(' '),
                step.status === 'done' && [
                  'bg-[rgba(74,222,128,0.15)] border border-[rgba(74,222,128,0.35)] text-[var(--color-success)]',
                ].join(' '),
                step.status === 'inactive' && [
                  'bg-[var(--color-input)] border border-[var(--color-border-mid)] text-[var(--color-text-muted)]',
                ].join(' '),
              )}
            >
              {step.status === 'done' ? <Check size={12} strokeWidth={2.5} /> : i + 1}
            </div>
            <span
              className={cn(
                'text-[11px] font-medium tracking-[0.3px]',
                step.status === 'active' && 'text-[var(--color-text-primary)]',
                step.status === 'done' && 'text-[var(--color-success)]',
                step.status === 'inactive' && 'text-[var(--color-text-muted)]',
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-px bg-[var(--color-border-subtle)] mx-1" />
          )}
        </div>
      ))}
    </div>
  )
}
