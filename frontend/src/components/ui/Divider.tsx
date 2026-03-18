interface DividerProps {
  label?: string
}

export function Divider({ label = 'or' }: DividerProps) {
  return (
    <div className="flex items-center gap-3 text-[var(--color-text-muted)] text-xs">
      <div className="flex-1 h-px bg-[var(--color-border-subtle)]" />
      <span>{label}</span>
      <div className="flex-1 h-px bg-[var(--color-border-subtle)]" />
    </div>
  )
}
