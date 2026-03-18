import { cn } from '../../lib/utils'

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { container: 'w-[30px] h-[30px] rounded-[8px] text-[13px]', text: 'text-base' },
  md: { container: 'w-[34px] h-[34px] rounded-[9px] text-[15px]', text: 'text-lg' },
  lg: { container: 'w-[36px] h-[36px] rounded-[10px] text-[16px]', text: 'text-xl' },
}

export function LogoMark({ size = 'md', className }: LogoMarkProps) {
  const s = sizes[size]
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={cn(
          s.container,
          'bg-gradient-to-br from-[#63b3ed] to-[#3a7bd5]',
          'flex items-center justify-center flex-shrink-0',
          'font-[family-name:var(--font-display)] font-extrabold text-white',
          'shadow-[0_0_16px_rgba(99,179,237,0.25)]',
          className,
        )}
      >
        N
      </div>
      <span
        className={cn(
          s.text,
          'font-[family-name:var(--font-display)] font-bold tracking-[-0.3px] text-[var(--color-text-primary)]',
        )}
      >
        NovaMail
      </span>
    </div>
  )
}
