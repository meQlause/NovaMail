import { cn, getPasswordStrength, getPasswordStrengthLabel, getPasswordStrengthColor } from '../../../lib/utils'

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null

  const score = getPasswordStrength(password)
  const label = getPasswordStrengthLabel(score)
  const colorClass = getPasswordStrengthColor(score)

  const segments = [0, 1, 2, 3]

  return (
    <div className="mt-2 flex flex-col gap-1.5">
      <div className="flex gap-1">
        {segments.map((seg) => (
          <div
            key={seg}
            className={cn(
              'flex-1 h-[3px] rounded-full transition-all duration-300',
              seg < score ? colorClass : 'bg-[var(--color-border-mid)]',
            )}
          />
        ))}
      </div>
      <span className="text-[11px] text-[var(--color-text-muted)]">
        {label} — {score < 3 ? 'add symbols or uppercase to improve' : 'great password'}
      </span>
    </div>
  )
}
