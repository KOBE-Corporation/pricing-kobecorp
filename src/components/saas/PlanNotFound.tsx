import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type PlanNotFoundProps = {
  t: (fr: string, en: string) => string;
};

export function PlanNotFound({ t }: PlanNotFoundProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] antialiased flex flex-col items-center justify-center px-6 safe-area-padding">
      <p className="text-neutral-600 mb-6 text-center">
        {t('Forfait introuvable.', 'Plan not found.')}
      </p>
      <Link
        to="/saas"
        className="inline-flex items-center gap-2 rounded-full bg-[#0a7aff] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 active:scale-[0.98] transition"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        {t('Retour aux forfaits', 'Back to plans')}
      </Link>
    </div>
  );
}
