import { useLanguage } from '../contexts/LanguageContext';

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
  /** Nombre de colonnes md / lg (par défaut 2) */
  cols?: {
    md?: number;
    lg?: number;
  };
};

const IncludedFeaturesSection = ({
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  items,
  cols,
}: IncludedFeaturesSectionProps) => {
  const { language } = useLanguage();

  const mdCols = cols?.md ?? 2;
  const lgCols = cols?.lg ?? 2;

  // On évite les classes dynamiques pour Tailwind en choisissant des combinaisons explicites
  let gridClasses = 'grid grid-cols-1 gap-6';
  if (mdCols === 2 && lgCols === 2) {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-2';
  } else if (mdCols === 2 && lgCols === 3) {
    gridClasses += ' md:grid-cols-2 lg:grid-cols-3';
  } else if (mdCols === 3 && lgCols === 3) {
    gridClasses += ' md:grid-cols-3 lg:grid-cols-3';
  } else {
    // fallback raisonnable
    gridClasses += ' md:grid-cols-2 lg:grid-cols-2';
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr' ? titleFr : titleEn}
          </h2>
          <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
            {language === 'fr' ? subtitleFr : subtitleEn}
          </p>
        </div>

        <div className={gridClasses}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
              >
                <div
                  className="rounded-lg p-2 flex-shrink-0"
                  style={{ backgroundColor: '#f0f7ff' }}
                >
                  {Icon ? (
                    <Icon className="h-5 w-5" style={{ color: '#0a7aff' }} />
                  ) : (
                    <svg
                      className="h-5 w-5"
                      style={{ color: '#0a7aff' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink mb-1">
                    {language === 'fr' ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600">
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

