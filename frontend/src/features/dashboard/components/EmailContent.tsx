import {
  Archive, Trash2, Info, FolderOpen, Tag, Clock,
  ChevronLeft, ChevronRight, MoreHorizontal,
  Reply, Forward, Paperclip,
} from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { AttachmentCard } from './AttachmentCard'
import type { Email } from '../types/email'

interface EmailContentProps {
  email: Email | null
}

export function EmailContent({ email }: EmailContentProps) {
  if (!email) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-[var(--color-text-muted)] gap-3">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-hover)] flex items-center justify-center">
          <FolderOpen size={22} className="opacity-40" />
        </div>
        <p className="text-sm">Select an email to read</p>
      </div>
    )
  }

  return (
    <section className="flex flex-col h-full bg-[var(--color-panel)]">
      {/* Toolbar */}
      <div
        className={[
          'flex items-center gap-1 px-4 py-2.5',
          'border-b border-[var(--color-border-subtle)]',
          'bg-[var(--color-card)]',
        ].join(' ')}
      >
        <ToolbarGroup>
          <Button variant="icon" title="Archive"><Archive size={14} /></Button>
          <Button variant="icon" title="Delete"><Trash2 size={14} /></Button>
          <Button variant="icon" title="Mark as unread"><Info size={14} /></Button>
          <Button variant="icon" title="Move to folder"><FolderOpen size={14} /></Button>
        </ToolbarGroup>

        <div className="w-px h-4 bg-[var(--color-border-subtle)] mx-1" />

        <ToolbarGroup>
          <Button variant="icon" title="Add label"><Tag size={14} /></Button>
          <Button variant="icon" title="Snooze"><Clock size={14} /></Button>
        </ToolbarGroup>

        <div className="flex-1" />

        <ToolbarGroup>
          <Button variant="icon" title="Previous"><ChevronLeft size={14} /></Button>
          <Button variant="icon" title="Next"><ChevronRight size={14} /></Button>
          <Button variant="icon" title="More"><MoreHorizontal size={14} /></Button>
        </ToolbarGroup>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6">
        {/* Subject */}
        <h1
          className={[
            'font-[family-name:var(--font-display)] font-bold text-[20px]',
            'leading-[1.3] tracking-[-0.4px] text-[var(--color-text-primary)] mb-5',
          ].join(' ')}
        >
          {email.subject}
        </h1>

        {/* Sender info card */}
        <div
          className={[
            'flex items-start gap-3 p-4 mb-6',
            'bg-[var(--color-card)] border border-[var(--color-border-subtle)]',
            'rounded-[var(--radius-md)]',
          ].join(' ')}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0"
            style={{ background: email.senderAvatarGradient }}
          >
            {email.senderInitials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-[13px] text-[var(--color-text-primary)]">{email.sender}</div>
            <div className="text-[12px] text-[var(--color-text-muted)] truncate">
              {email.senderEmail} → alex.johnson@novamail.io
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="text-[12px] text-[var(--color-text-muted)] mr-1">{email.time}</span>
            <Button variant="icon" title="Reply"><Reply size={13} /></Button>
            <Button variant="icon" title="Forward"><Forward size={13} /></Button>
            <Button variant="icon" title="More"><MoreHorizontal size={13} /></Button>
          </div>
        </div>

        {/* Body */}
        {email.body ? (
          <div
            className={[
              'text-[14px] text-[var(--color-text-secondary)] leading-[1.75]',
              '[&_p]:mb-4 [&_strong]:text-[var(--color-text-primary)] [&_strong]:font-semibold',
              '[&_code]:bg-[var(--color-hover)] [&_code]:px-1.5 [&_code]:py-0.5',
              '[&_code]:rounded [&_code]:text-[13px] [&_code]:text-[var(--color-accent)]',
            ].join(' ')}
            dangerouslySetInnerHTML={{ __html: email.body }}
          />
        ) : (
          <p className="text-sm text-[var(--color-text-secondary)] leading-[1.75]">
            {email.preview}
          </p>
        )}

        {/* Attachments */}
        {email.attachments && email.attachments.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3 text-[12px] text-[var(--color-text-muted)]">
              <Paperclip size={13} />
              {email.attachments.length} Attachment{email.attachments.length > 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {email.attachments.map((att) => (
                <AttachmentCard key={att.id} attachment={att} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reply box */}
      <div className="px-4 py-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-card)]">
        <div
          className={[
            'flex items-center gap-3 px-4 py-3',
            'bg-[var(--color-input)] border border-[var(--color-border-mid)]',
            'rounded-[var(--radius-md)] cursor-text',
            'hover:border-[var(--color-border-strong)] transition-colors',
          ].join(' ')}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#63b3ed] to-[#3a7bd5] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
            AJ
          </div>
          <span className="flex-1 text-[13px] text-[var(--color-text-muted)]">
            Reply to {email.sender}…
          </span>
          <div className="flex items-center gap-0.5">
            <Button variant="icon" title="Attach file"><Paperclip size={14} /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>
}
