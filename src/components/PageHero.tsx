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
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 min-h-[400px] flex items-center"
    >
      {/* Fond */}
      <div className="absolute inset-0 overflow-hidden bg-white" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape" />
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-6 animate-fadeInUp leading-[1.15]">
          {title}
        </h1>
        <p className="font-sans text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-5 animate-fadeInUp leading-relaxed" style={{ animationDelay: '80ms' }}>
          {subtitle}
        </p>
        {highlightLine && (
          <p className="font-sans text-sm md:text-base text-brand-600 font-semibold max-w-2xl mx-auto mb-10 animate-fadeInUp flex flex-wrap items-center justify-center gap-x-4 gap-y-1" style={{ animationDelay: '120ms' }}>
            {highlightLine}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '160ms' }}>
            {primaryCta && (
              <Button variant={primaryCta.variant ?? 'primary'} size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button variant={secondaryCta.variant ?? 'outline'} size="lg" href={secondaryCta.href}>
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
