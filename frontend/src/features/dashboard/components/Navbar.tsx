import { Search, Settings, Bell } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

interface NavbarProps {
  searchValue: string
  onSearchChange: (val: string) => void
}

export function Navbar({ searchValue, onSearchChange }: NavbarProps) {
  return (
    <header
      className={[
        'flex items-center gap-3 px-4',
        'bg-[var(--color-card)] border-b border-[var(--color-border-subtle)]',
        'h-full',
      ].join(' ')}
    >
      {/* Search */}
      <div className="flex-1 relative max-w-md">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search emails…"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className={[
            'nova-input w-full bg-[var(--color-input)] border border-[var(--color-border-mid)]',
            'rounded-[var(--radius-sm)] text-sm text-[var(--color-text-primary)]',
            'placeholder:text-[var(--color-text-muted)] py-2 pl-8 pr-3',
          ].join(' ')}
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Button variant="icon" aria-label="Notifications">
          <Bell size={16} />
        </Button>
        <Button variant="icon" aria-label="Settings">
          <Settings size={16} />
        </Button>
      </div>
    </header>
  )
}
