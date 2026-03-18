import { Check } from 'lucide-react'

const badges = ['SOC 2 Compliant', 'GDPR Ready', '256-bit Encryption']

export function TrustBadges() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5 mt-7 pt-6 border-t border-[var(--color-border-subtle)]">
      {badges.map((badge) => (
        <div key={badge} className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
          <Check size={12} strokeWidth={2.5} className="text-[var(--color-success)] flex-shrink-0" />
          {badge}
        </div>
      ))}
    </div>
  )
}
