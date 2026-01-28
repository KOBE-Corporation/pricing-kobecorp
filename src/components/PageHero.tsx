import Button from './Button';

type HeroCta = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

type PageHeroProps = {
  id?: string;
  title: string;
  subtitle: string;
  /** Ligne de mise en avant sous le sous-titre (ex : puces de bénéfices) */
  highlightLine?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

const PageHero = ({
  id,
  title,
  subtitle,
  highlightLine,
  primaryCta,
  secondaryCta,
}: PageHeroProps) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[500px]"
    >
      <div
        className="absolute inset-0 overflow-hidden bg-white"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape"></div>
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink mb-6 animate-fadeInUp">
          {title}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-4 animate-fadeInUp">
          {subtitle}
        </p>
        {highlightLine && (
          <p className="font-sans text-base text-brand-600 font-medium max-w-2xl mx-auto mb-8 animate-fadeInUp">
            {highlightLine}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button
                variant={primaryCta.variant ?? 'primary'}
                size="lg"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant={secondaryCta.variant ?? 'outline'}
                size="lg"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;

