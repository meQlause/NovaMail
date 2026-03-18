import { Star } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { EmailTagChip } from './EmailTagChip'
import type { Email } from '../types/email'

interface EmailListItemProps {
  email: Email
  isSelected: boolean
  onClick: () => void
}

export function EmailListItem({ email, isSelected, onClick }: EmailListItemProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className={cn(
        'relative px-4 py-3.5 cursor-pointer transition-colors duration-150',
        'border-b border-[var(--color-border-subtle)]',
        isSelected
          ? 'bg-[var(--color-active)] border-l-2 border-l-[var(--color-accent)]'
          : 'hover:bg-[var(--color-hover)]',
        email.isUnread && !isSelected ? 'border-l-2 border-l-[var(--color-accent)]' : '',
      )}
    >
      {/* Top row: sender + time */}
      <div className="flex items-center justify-between mb-0.5">
        <span
          className={cn(
            'text-[13px] truncate mr-2',
            email.isUnread
              ? 'text-[var(--color-text-unread)] font-semibold'
              : 'text-[var(--color-text-primary)] font-medium',
          )}
        >
          {email.sender}
        </span>
        <span className="text-[11px] text-[var(--color-text-muted)] flex-shrink-0">{email.time}</span>
      </div>

      {/* Subject */}
      <div
        className={cn(
          'text-[12px] truncate mb-1',
          email.isUnread
            ? 'text-[var(--color-text-primary)] font-medium'
            : 'text-[var(--color-text-secondary)]',
        )}
      >
        {email.subject}
      </div>

      {/* Preview */}
      <div className="text-[11px] text-[var(--color-text-muted)] line-clamp-1 mb-2">
        {email.preview}
      </div>

      {/* Tags + star */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1 flex-wrap">
          {email.tags.map((tag) => (
            <EmailTagChip key={tag.label} tag={tag} />
          ))}
        </div>
        {email.isStarred && (
          <Star
            size={12}
            className="text-[var(--color-warning)] flex-shrink-0"
            fill="currentColor"
          />
        )}
      </div>

      {/* Unread dot */}
      {email.isUnread && (
        <span
          className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
          style={{ boxShadow: '0 0 4px rgba(99,179,237,0.6)' }}
        />
      )}
    </div>
  )
}
