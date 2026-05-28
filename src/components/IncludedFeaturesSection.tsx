import { useLanguage } from '../contexts/useLanguage';
import { CheckIcon } from '@heroicons/react/24/solid';

type IncludedItem = {
  icon?: React.ComponentType<{ className?: string }>;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
};

type IncludedFeaturesSectionProps = {
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  items: IncludedItem[];
  cols?: { md?: number; lg?: number };
  badgeLabelFr?: string;
  badgeLabelEn?: string;
};

const IncludedFeaturesSection = ({
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  items,
  cols,
  badgeLabelFr,
  badgeLabelEn,
}: IncludedFeaturesSectionProps) => {
  const { language } = useLanguage();

  const mdCols = cols?.md ?? 2;
  const lgCols = cols?.lg ?? 2;

  let gridClasses = 'grid grid-cols-1 gap-5';
  if (mdCols === 2 && lgCols === 2) gridClasses += ' md:grid-cols-2 lg:grid-cols-2';
  else if (mdCols === 2 && lgCols === 3) gridClasses += ' md:grid-cols-2 lg:grid-cols-3';
  else if (mdCols === 3 && lgCols === 3) gridClasses += ' md:grid-cols-3 lg:grid-cols-3';
  else gridClasses += ' md:grid-cols-2 lg:grid-cols-2';

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          {badgeLabelFr || badgeLabelEn ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-500/10 mb-4">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {language === 'fr' ? badgeLabelFr ?? badgeLabelEn : badgeLabelEn ?? badgeLabelFr}
            </span>
          ) : null}
          <h2 className="mb-6 font-display text-4xl leading-[1.1] text-ink transition-all duration-1000 ease-out md:text-5xl lg:text-6xl">
            {language === 'fr' ? titleFr : titleEn}
          </h2>
          <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr' ? subtitleFr : subtitleEn}
          </p>
        </header>

        <div className={gridClasses}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-brand-200 hover:bg-brand-50/30 hover:shadow-pricing transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600 group-hover:bg-brand-200/80 transition-colors">
                  {Icon ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <CheckIcon className="h-5 w-5" />
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-ink mb-1">
                    {language === 'fr' ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    {language === 'fr' ? item.descFr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IncludedFeaturesSection;
