import type { Attachment } from '../types/email'

const TYPE_STYLES: Record<Attachment['type'], { label: string; bg: string; text: string }> = {
  figma: { label: 'Fig', bg: 'rgba(99,179,237,0.15)', text: '#63b3ed' },
  pdf: { label: 'PDF', bg: 'rgba(248,113,113,0.15)', text: '#f87171' },
  zip: { label: 'ZIP', bg: 'rgba(251,191,36,0.15)', text: '#fbbf24' },
  img: { label: 'IMG', bg: 'rgba(74,222,128,0.15)', text: '#4ade80' },
  doc: { label: 'DOC', bg: 'rgba(167,139,250,0.15)', text: '#a78bfa' },
}

export function AttachmentCard({ attachment }: { attachment: Attachment }) {
  const style = TYPE_STYLES[attachment.type]
  return (
    <div
      className={[
        'flex items-center gap-3 p-3',
        'bg-[var(--color-hover)] border border-[var(--color-border-subtle)]',
        'rounded-[var(--radius-sm)] cursor-pointer',
        'hover:border-[var(--color-border-mid)] transition-colors',
      ].join(' ')}
    >
      <div
        className="w-9 h-9 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
        style={{ background: style.bg, color: style.text }}
      >
        {style.label}
      </div>
      <div className="min-w-0">
        <div className="text-[12px] text-[var(--color-text-primary)] font-medium truncate">
          {attachment.name}
        </div>
        <div className="text-[11px] text-[var(--color-text-muted)]">{attachment.size}</div>
      </div>
    </div>
  )
}
