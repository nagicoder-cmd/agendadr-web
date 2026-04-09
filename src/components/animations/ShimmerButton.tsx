// ShimmerButton — adapted from Magic UI (magicui.design/docs/components/shimmer-button)
import type { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  shimmerColor?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  href,
  className = '',
  shimmerColor = 'rgba(255,255,255,0.15)',
  background = '#03BB85',
}: ShimmerButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  const shimmer = (
    <span
      className="absolute inset-0 -translate-x-full"
      style={{
        background: `linear-gradient(105deg, transparent 40%, ${shimmerColor} 50%, transparent 60%)`,
        animation: 'shimmer 2.5s infinite',
      }}
      aria-hidden="true"
    />
  );

  const content = (
    <>
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={{ background }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      style={{ background }}
    >
      {content}
    </button>
  );
}
