/**
 * Logos des moyens de paiement (représentations officielles).
 * Utilisés sur la page de souscription SaaS.
 */

export const OrangeMoneyLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF6600" />
    <text x="20" y="26" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial,sans-serif">
      OM
    </text>
  </svg>
);

export const MTNMobileMoneyLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FFCC00" />
    <text x="20" y="26" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Arial,sans-serif">
      MTN
    </text>
  </svg>
);

export const VisaLogo = ({ className = 'w-12 h-8' }: { className?: string }) => (
  <svg viewBox="0 0 48 16" className={className} fill="#1A1F71" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="12" fontSize="14" fontWeight="700" fontFamily="Arial,sans-serif">
      VISA
    </text>
  </svg>
);

export const MastercardLogo = ({ className = 'w-12 h-8' }: { className?: string }) => (
  <svg viewBox="0 0 48 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="16" r="12" fill="#EB001B" />
    <circle cx="30" cy="16" r="12" fill="#F79E1B" />
    <path d="M24 6.5a12 12 0 0 1 0 19 12 12 0 0 1 0-19z" fill="#FF5F00" opacity=".9" />
  </svg>
);
