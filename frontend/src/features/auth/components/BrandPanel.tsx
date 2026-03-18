import { LogoMark } from '../../../components/ui/LogoMark'

const features = [
  'End-to-end encrypted',
  'AI-powered filtering',
  'Zero-latency sync',
]

export function BrandPanel() {
  return (
    <div
      className={[
        'relative overflow-hidden flex flex-col justify-between',
        'bg-gradient-to-br from-[#0d1420] via-[#0a1025] to-[#060d1a]',
        'p-10 md:p-14 brand-panel-glow',
      ].join(' ')}
    >
      <LogoMark size="lg" />

      <div className="relative z-10 mt-10 md:mt-0">
        <h1
          className={[
            'font-[family-name:var(--font-display)] font-extrabold',
            'text-[28px] md:text-[38px] leading-[1.12] tracking-[-1.5px]',
            'text-[var(--color-text-primary)] mb-4',
          ].join(' ')}
        >
          The inbox
          <br />
          built for
          <br />
          <span
            className="bg-gradient-to-r from-[#63b3ed] to-[#9bb5ff] bg-clip-text text-transparent"
          >
            clarity.
          </span>
        </h1>
        <p className="text-[var(--color-text-secondary)] text-[15px] leading-[1.65] font-light max-w-[300px]">
          A sleek, distraction-free email experience for professionals who value their time and focus.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-3 relative z-10 mt-10 md:mt-0">
        {features.map((feat) => (
          <FeaturePill key={feat} label={feat} />
        ))}
      </div>
    </div>
  )
}

function FeaturePill({ label }: { label: string }) {
  return (
    <div
      className={[
        'inline-flex items-center gap-2.5',
        'bg-white/[0.04] border border-[var(--color-border-subtle)]',
        'rounded-full px-3.5 py-2 text-[13px] text-[var(--color-text-secondary)]',
        'w-fit',
      ].join(' ')}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--color-accent)]"
        style={{ boxShadow: '0 0 6px #63b3ed' }}
      />
      {label}
    </div>
  )
}
