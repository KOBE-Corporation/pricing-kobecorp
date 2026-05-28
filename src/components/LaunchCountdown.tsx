import { useEffect, useMemo, useState } from 'react';
import { CalendarDaysIcon, ClockIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  finished: boolean;
};

type LaunchCountdownProps = {
  targetDate: string;
  label?: string;
  finishedLabel?: string;
  dateLabel?: string;
};

const getCountdownParts = (targetTimestamp: number, now = Date.now()): CountdownParts => {
  const diff = targetTimestamp - now;
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

const LaunchCountdown = ({
  targetDate,
  label = 'Compte à rebours du lancement officiel',
  finishedLabel = 'Lancement officiel en cours',
  dateLabel = 'Date de lancement : 30/03/2026 à 00:00',
}: LaunchCountdownProps) => {
  const targetTimestamp = useMemo(() => {
    const parsed = Date.parse(targetDate);
    return Number.isNaN(parsed) ? null : parsed;
  }, [targetDate]);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!targetTimestamp) return;

    const timer = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetTimestamp]);

  const countdown = useMemo(() => {
    if (!targetTimestamp) return null;
    void tick;
    return getCountdownParts(targetTimestamp);
  }, [targetTimestamp, tick]);

  if (!countdown) return null;
  if (countdown.finished) return null;

  const parts = [
    { key: 'days', value: countdown.days, unit: 'JJ' },
    { key: 'hours', value: countdown.hours, unit: 'HH' },
    { key: 'minutes', value: countdown.minutes, unit: 'MM' },
    { key: 'seconds', value: countdown.seconds, unit: 'SS' },
  ];

  return (
    <div className="inline-flex flex-col items-center rounded-2xl border border-brand-200 bg-gradient-to-b from-white to-brand-50/30 px-4 py-4 shadow-soft backdrop-blur-sm animate-fadeInUp">
      <div className="flex items-center justify-center gap-2 text-brand-600 mb-3">
        <ClockIcon className="h-4 w-4 animate-pulse" />
        <p className="text-xs font-semibold uppercase tracking-wider">
          {label}
        </p>
        <RocketLaunchIcon className="h-4 w-4" />
      </div>

      <div className="flex items-stretch justify-center gap-1.5 sm:gap-2.5">
        {parts.map((part, idx) => (
          <div key={part.key} className="flex items-center gap-1.5 sm:gap-2.5">
            <div className={`min-w-[60px] sm:min-w-[74px] rounded-xl border border-brand-100 bg-white px-2 py-2 sm:px-3 ${part.key === 'seconds' ? 'ring-1 ring-brand-200/70' : ''}`}>
              <p className="font-display text-xl sm:text-2xl leading-none font-semibold text-ink tabular-nums">
                {part.value}
              </p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold text-brand-600 uppercase tracking-wide">
                {part.unit}
              </p>
            </div>
            {idx < parts.length - 1 && <span className="font-display text-xl sm:text-2xl text-brand-500/70 pb-4">:</span>}
          </div>
        ))}
      </div>

      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-600 font-medium">
        <CalendarDaysIcon className="h-4 w-4 text-brand-600" />
        {countdown.finished ? finishedLabel : dateLabel}
      </div>
    </div>
  );
};

export default LaunchCountdown;
