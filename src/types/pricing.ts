export type PricingFeature = {
  name: string;
  included: boolean;
};

/** Fourchette de prix (ex. dev logiciel en F CFA) en fonction du délai de livraison */
export type PriceRange = {
  min: number;       // Montant min en F CFA
  max: number;       // Montant max en F CFA
  deliveryDays: number; // Délai de livraison en jours (pour affichage)
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string; // "mois", "année", "devis", etc.
  features: PricingFeature[];
  popular?: boolean;
  ctaText: string;
  ctaLink?: string;
  /** Fourchette indicative (ex. Full-Control) : min/max F CFA pour X jours */
  priceRange?: PriceRange;
  /** Prix facturé en cas de facturation annuelle (total pour 12 mois) */
  annualPrice?: number;
  /** Montant de la remise annuelle par rapport à 12 × prix mensuel */
  annualSavings?: number;
};
