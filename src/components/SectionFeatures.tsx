import { ReactNode } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type FeatureItem = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
};

type SectionFeaturesProps = {
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  items: FeatureItem[];
};

const SectionFeatures = ({
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  items,
}: SectionFeaturesProps) => {
  const { language } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-subtle hover:border-brand-300 hover:shadow-card-hover transition-all animate-fadeInUp"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-xl p-3 flex-shrink-0"
                    style={{ backgroundColor: '#f0f7ff' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#0a7aff' }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">
                      {language === 'fr' ? item.titleFr : item.titleEn}
                    </h3>
                    <p className="font-sans text-neutral-600">
                      {language === 'fr'
                        ? item.descriptionFr
                        : item.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;

