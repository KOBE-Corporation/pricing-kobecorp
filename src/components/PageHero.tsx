import { useEffect, useMemo, useState } from 'react';
import { CalendarDaysIcon, ClockIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
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
  countdownTargetDate?: string;
  countdownLabel?: string;
  countdownFinishedLabel?: string;
  countdownDateLabel?: string;
};

type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  finished: boolean;
};

const getCountdownParts = (targetTimestamp: number): CountdownParts => {
  const diff = targetTimestamp - Date.now();
  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      finished: true,
    };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    finished: false,
  };
};

const PageHero = ({
  id,
  title,
  subtitle,
  highlightLine,
  primaryCta,
  secondaryCta,
  countdownTargetDate,
  countdownLabel,
  countdownFinishedLabel,
  countdownDateLabel,
}: PageHeroProps) => {
  const targetTimestamp = useMemo(() => {
    if (!countdownTargetDate) return null;
    const parsed = Date.parse(countdownTargetDate);
    return Number.isNaN(parsed) ? null : parsed;
  }, [countdownTargetDate]);

  const [countdown, setCountdown] = useState<CountdownParts | null>(() => {
    if (!targetTimestamp) return null;
    return getCountdownParts(targetTimestamp);
  });

  useEffect(() => {
    if (!targetTimestamp) {
      setCountdown(null);
      return;
    }
    const tick = () => {
      const next = getCountdownParts(targetTimestamp);
      setCountdown(next);
      return next.finished;
    };
    tick();
    const timer = window.setInterval(() => {
      const finished = tick();
      if (finished) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [targetTimestamp]);

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
        {countdown && !countdown.finished && (
          <div className="mb-7 w-full max-w-2xl mx-auto rounded-2xl border border-brand-200 bg-gradient-to-b from-white to-brand-50/30 px-4 py-4 shadow-soft backdrop-blur-sm animate-fadeInUp">
            <div className="flex items-center justify-center gap-2 text-brand-600 mb-3">
              <ClockIcon className="h-4 w-4 animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                {countdownLabel ?? 'Compte à rebours du lancement officiel'}
              </p>
              <RocketLaunchIcon className="h-4 w-4" />
            </div>

            <div className="flex items-stretch justify-center gap-1.5 sm:gap-2.5">
              {[
                { key: 'days', value: countdown.days, label: 'JJ' },
                { key: 'hours', value: countdown.hours, label: 'HH' },
                { key: 'minutes', value: countdown.minutes, label: 'MM' },
                { key: 'seconds', value: countdown.seconds, label: 'SS' },
              ].map((part, idx) => (
                <div key={part.key} className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className={`min-w-[60px] sm:min-w-[74px] rounded-xl border border-brand-100 bg-white px-2 py-2 sm:px-3 ${part.key === 'seconds' ? 'ring-1 ring-brand-200/70' : ''}`}>
                    <p className="font-display text-xl sm:text-2xl leading-none font-semibold text-ink tabular-nums">
                      {part.value}
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs font-semibold text-brand-600 uppercase tracking-wide">
                      {part.label}
                    </p>
                  </div>
                  {idx < 3 && <span className="font-display text-xl sm:text-2xl text-brand-500/70 pb-4">:</span>}
                </div>
              ))}
            </div>

            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-600 font-medium">
              <CalendarDaysIcon className="h-4 w-4 text-brand-600" />
              {countdownDateLabel ?? 'Date de lancement : 30/03/2026 à 00:00'}
            </div>
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-6 animate-fadeInUp">
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
