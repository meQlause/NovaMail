import { SlidersHorizontal } from 'lucide-react'
import { EmailListItem } from './EmailListItem'
import type { Email } from '../types/email'

interface EmailListProps {
  emails: Email[]
  selectedId: string | null
  onSelect: (id: string) => void
  activeNav: string
}

const NAV_LABELS: Record<string, string> = {
  inbox: 'Inbox',
  starred: 'Starred',
  sent: 'Sent',
  drafts: 'Drafts',
  scheduled: 'Scheduled',
  spam: 'Spam',
  trash: 'Trash',
}

export function EmailList({ emails, selectedId, onSelect, activeNav }: EmailListProps) {
  return (
    <section
      className={[
        'flex flex-col h-full',
        'border-r border-[var(--color-border-subtle)]',
        'bg-[var(--color-card)]',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-subtle)]">
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-[14px] text-[var(--color-text-primary)]">
          {NAV_LABELS[activeNav] ?? 'Inbox'}
          {emails.filter((e) => e.isUnread).length > 0 && (
            <span className="ml-2 text-[11px] font-normal text-[var(--color-text-muted)]">
              {emails.filter((e) => e.isUnread).length} unread
            </span>
          )}
        </h2>
        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
          <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Email list */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {emails.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-[var(--color-text-muted)] text-sm gap-2">
            <span>No emails found</span>
          </div>
        ) : (
          emails.map((email) => (
            <EmailListItem
              key={email.id}
              email={email}
              isSelected={selectedId === email.id}
              onClick={() => onSelect(email.id)}
            />
          ))
        )}
      </div>
    </section>
  )
}
