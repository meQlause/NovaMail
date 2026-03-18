import { cn } from '../../../lib/utils'
import type { EmailTag, TagColor } from '../types/email'

const TAG_STYLES: Record<TagColor, string> = {
  blue: 'bg-[var(--color-tag-blue-bg)] text-[var(--color-tag-blue-text)]',
  green: 'bg-[var(--color-tag-green-bg)] text-[var(--color-tag-green-text)]',
  amber: 'bg-[var(--color-tag-amber-bg)] text-[var(--color-tag-amber-text)]',
  red: 'bg-[var(--color-tag-red-bg)] text-[var(--color-tag-red-text)]',
}

export function EmailTagChip({ tag }: { tag: EmailTag }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium',
        TAG_STYLES[tag.color],
      )}
    >
      {tag.label}
    </span>
  )
}
