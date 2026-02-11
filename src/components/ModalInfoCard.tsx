import type { ComponentType, ReactNode } from 'react';

export type InfoCardTone = 'rose' | 'indigo' | 'neutral' | 'amber' | 'blue' | 'slate';

export interface ModalInfoCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: ReactNode;
  tone?: InfoCardTone;
  className?: string;
}

const toneClasses: Record<InfoCardTone, { card: string; icon: string }> = {
  rose: {
    card: 'border-rose-200 bg-rose-50/40',
    icon: 'bg-rose-100 text-rose-600',
  },
  indigo: {
    card: 'border-indigo-200 bg-indigo-50/40',
    icon: 'bg-indigo-100 text-indigo-600',
  },
  neutral: {
    card: 'border-neutral-200 bg-white',
    icon: 'bg-neutral-100 text-neutral-600',
  },
  slate: {
    card: 'border-neutral-200 bg-white',
    icon: 'bg-neutral-100 text-neutral-600',
  },
  amber: {
    card: 'border-amber-200 bg-amber-50/50',
    icon: 'bg-amber-100 text-amber-700',
  },
  blue: {
    card: 'border-blue-100 bg-blue-50/40',
    icon: 'bg-blue-100 text-blue-600',
  },
};

const ModalInfoCard = ({
  icon: Icon,
  title,
  description,
  tone = 'neutral',
  className = '',
}: ModalInfoCardProps) => {
  const toneStyle = toneClasses[tone];
  return (
    <article className={`rounded-2xl border p-4 sm:p-5 ${toneStyle.card} ${className}`.trim()}>
      <div className="flex items-start gap-3">
        <span className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg ${toneStyle.icon}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h5 className="text-base font-semibold text-neutral-900 leading-tight">{title}</h5>
          <div className="mt-1 text-sm text-neutral-600 leading-relaxed">{description}</div>
        </div>
      </div>
    </article>
  );
};

export default ModalInfoCard;
