import {
  Inbox, Star, Send, FileText, Clock, AlertTriangle, Trash2,
  Tag, Plus, Edit2,
} from 'lucide-react'
import { cn } from '../../../lib/utils'
import { LogoMark } from '../../../components/ui/LogoMark'
import { SIDEBAR_MAIN_NAV, SIDEBAR_LABELS, type NavItem } from '../types/email'

const NAV_ICONS: Record<string, React.ReactNode> = {
  inbox: <Inbox size={15} />,
  starred: <Star size={15} />,
  sent: <Send size={15} />,
  drafts: <FileText size={15} />,
  scheduled: <Clock size={15} />,
  spam: <AlertTriangle size={15} />,
  trash: <Trash2 size={15} />,
}

const LABEL_COLORS: Record<string, string> = {
  work: 'bg-[var(--color-tag-blue-bg)] text-[var(--color-tag-blue-text)]',
  design: 'bg-[var(--color-tag-amber-bg)] text-[var(--color-tag-amber-text)]',
  engineering: 'bg-[var(--color-tag-green-bg)] text-[var(--color-tag-green-text)]',
  business: 'bg-[var(--color-tag-red-bg)] text-[var(--color-tag-red-text)]',
}

interface SidebarProps {
  activeNav: string
  onNavChange: (id: string) => void
}

export function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  return (
    <aside
      className={[
        'flex flex-col h-full overflow-y-auto scrollbar-hide',
        'bg-[var(--color-surface)] border-r border-[var(--color-border-subtle)]',
      ].join(' ')}
    >
      {/* Logo */}
      <div className="px-[18px] py-[18px] pb-4 border-b border-[var(--color-border-subtle)]">
        <LogoMark size="sm" />
      </div>

      {/* Compose */}
      <div className="mx-3.5 my-4">
        <button
          className={[
            'w-full flex items-center gap-2 px-4 py-2.5',
            'bg-gradient-to-br from-[rgba(99,179,237,0.15)] to-[rgba(58,123,213,0.12)]',
            'border border-[rgba(99,179,237,0.22)] rounded-[var(--radius-sm)]',
            'text-[var(--color-accent)] text-[13px] font-semibold font-[family-name:var(--font-display)] tracking-[0.2px]',
            'hover:from-[rgba(99,179,237,0.22)] hover:to-[rgba(58,123,213,0.18)]',
            'hover:border-[rgba(99,179,237,0.38)] hover:shadow-[0_2px_16px_rgba(99,179,237,0.12)]',
            'transition-all duration-200 cursor-pointer',
          ].join(' ')}
        >
          <span
            className="w-[18px] h-[18px] bg-gradient-to-br from-[#63b3ed] to-[#3a7bd5] rounded-[4px] flex items-center justify-center flex-shrink-0"
          >
            <Edit2 size={10} className="text-white" />
          </span>
          Compose
        </button>
      </div>

      {/* Main nav */}
      <NavSection>
        {SIDEBAR_MAIN_NAV.map((item) => (
          <NavItemRow
            key={item.id}
            item={item}
            icon={NAV_ICONS[item.id]}
            isActive={activeNav === item.id}
            onClick={() => onNavChange(item.id)}
          />
        ))}
      </NavSection>

      {/* Labels */}
      <NavSection label="Labels">
        {SIDEBAR_LABELS.map((item) => (
          <NavItemRow
            key={item.id}
            item={item}
            icon={
              <span
                className={cn(
                  'w-2 h-2 rounded-full flex-shrink-0',
                  LABEL_COLORS[item.id] || 'bg-[var(--color-text-muted)]',
                )}
              />
            }
            isActive={false}
            onClick={() => {}}
          />
        ))}
        <button className="flex items-center gap-2 px-3 py-1.5 w-full text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer">
          <Plus size={12} />
          Add label
        </button>
      </NavSection>

      {/* Spacer + User */}
      <div className="flex-1" />
      <div className="px-3 py-4 border-t border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-hover)] transition-colors cursor-pointer">
          <div
            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#63b3ed] to-[#3a7bd5] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
          >
            AJ
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-medium text-[var(--color-text-primary)] truncate">Alex Johnson</div>
            <div className="text-[11px] text-[var(--color-text-muted)] truncate">alex.johnson@novamail.io</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function NavSection({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="py-2 border-t border-[var(--color-border-subtle)] first:border-t-0">
      {label && (
        <p className="px-4 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.8px] text-[var(--color-text-muted)]">
          {label}
        </p>
      )}
      {children}
    </div>
  )
}

function NavItemRow({
  item,
  icon,
  isActive,
  onClick,
}: {
  item: NavItem
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2.5 w-full px-3 py-1.5 rounded-[var(--radius-xs)] mx-1',
        'text-[13px] transition-all duration-150 cursor-pointer',
        isActive
          ? 'bg-[var(--color-selected)] text-[var(--color-text-primary)] font-medium'
          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]',
      )}
      style={{ width: 'calc(100% - 8px)' }}
    >
      <span className={cn('flex-shrink-0', isActive ? 'text-[var(--color-accent)]' : '')}>
        {icon}
      </span>
      <span className="flex-1 text-left truncate">{item.label}</span>
      {item.count != null && item.count > 0 && (
        <span
          className={cn(
            'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
            isActive
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-hover)] text-[var(--color-text-muted)]',
          )}
        >
          {item.count}
        </span>
      )}
    </button>
  )
}
