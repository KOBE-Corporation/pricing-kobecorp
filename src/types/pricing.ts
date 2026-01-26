export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string; // "mois", "année", etc.
  features: PricingFeature[];
  popular?: boolean; // Pour mettre en évidence un forfait populaire
  ctaText: string; // Texte du bouton d'action
  ctaLink?: string; // Lien du bouton (optionnel)
}
