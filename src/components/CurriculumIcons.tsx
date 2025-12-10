import React from 'react';

interface IconProps {
  className?: string;
}

// Icon 1: Artisan Bread with Wheat
export const BreadIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wheat stalk */}
    <path d="M4 4L6 6M4 4C4.5 4 5 4.5 5 5C5 5.5 4.5 6 4 6M4 4C3.5 4 3 4.5 3 5C3 5.5 3.5 6 4 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M4 6L6 8M4 6C4.5 6 5 6.5 5 7C5 7.5 4.5 8 4 8M4 6C3.5 6 3 6.5 3 7C3 7.5 3.5 8 4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M4 8L6 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Rustic loaf */}
    <ellipse cx="14" cy="15" rx="6.5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M9 15C9 13.5 10.5 11 14 11C17.5 11 19 13.5 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 14C11 13.5 12 12.5 14 12.5C16 12.5 17 13.5 17 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Scoring marks */}
    <path d="M12 15L13.5 16.5M15.5 15L14 16.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Icon 2: Mixing Bowl with Steam & Cookies
export const CupcakeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mixing bowl */}
    <path d="M6 10C6 10 7 8 12 8C17 8 18 10 18 10L16 18C16 18.5 15.5 19 15 19H9C8.5 19 8 18.5 8 18L6 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
    {/* Whisk marks */}
    <path d="M10 12L11 14M14 12L13 14M12 11.5V14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Steam/cookies on top */}
    <circle cx="9" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15"/>
    <circle cx="12" cy="4" r="1.2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15"/>
    <circle cx="15" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

// Icon 3: Elegant Ramekin with Custard
export const CheesecakeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ramekin base */}
    <path d="M7 11C7 10.5 7.5 10 8 10H16C16.5 10 17 10.5 17 11V16C17 16.8 16.5 17.5 15.5 18H8.5C7.5 17.5 7 16.8 7 16V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    {/* Custard top with caramelized surface */}
    <ellipse cx="12" cy="10.5" rx="5" ry="1.8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
    <path d="M8.5 9.5C8.5 8.5 9.5 7 12 7C14.5 7 15.5 8.5 15.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Decorative berries */}
    <circle cx="10" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="14" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="12" cy="5" r="0.8" fill="currentColor"/>
  </svg>
);

// Icon 4: Brioche Bun with Seeds
export const CroissantIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brioche shape */}
    <ellipse cx="12" cy="15" rx="6" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M8 15C8 13 9 10.5 12 10.5C15 10.5 16 13 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Brioche top knot */}
    <circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M10.5 9.5L12 10.5L13.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Seeds/glaze marks */}
    <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="14.5" r="0.5" fill="currentColor"/>
    <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
    <circle cx="10.5" cy="16.5" r="0.5" fill="currentColor"/>
    <circle cx="13.5" cy="16.5" r="0.5" fill="currentColor"/>
  </svg>
);

// Icon 5: Detailed Macaron with Filling
export const MacaronIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top shell with feet */}
    <ellipse cx="12" cy="9" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M5.5 9C5.5 9.8 6 10.5 6.5 11C7 11.3 7.5 11.5 8 11.5M18.5 9C18.5 9.8 18 10.5 17.5 11C17 11.3 16.5 11.5 16 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Filling */}
    <ellipse cx="12" cy="12.5" rx="5" ry="1.5" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.2"/>
    {/* Bottom shell */}
    <ellipse cx="12" cy="16" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M5.5 16C5.5 15.2 6 14.5 6.5 14C7 13.7 7.5 13.5 8 13.5M18.5 16C18.5 15.2 18 14.5 17.5 14C17 13.7 16.5 13.5 16 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// Icon 6: Quiche in Tart Pan
export const TartIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tart pan with fluted edges */}
    <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M5.5 13L6 13.5L6.5 13L7 13.5L7.5 13L8 13.5L8.5 13M15.5 13L16 13.5L16.5 13L17 13.5L17.5 13L18 13.5L18.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6C12 6 14 10 12 12C12 12 10 10 12 6Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Filling ingredients */}
    <circle cx="10" cy="11" r="1" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="14" cy="12" r="1.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="12" cy="14.5" r="0.9" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

// Icon 7: Layered Croissant Cross-section
export const LaminatedIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Croissant outline */}
    <path d="M6 12C6 12 7 8 10 7C11 6.5 12 7 12 7C12 7 13 6.5 14 7C17 8 18 12 18 12C18 12 17 16 14 17C13 17.5 12 17 12 17C12 17 11 17.5 10 17C7 16 6 12 6 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
    {/* Lamination layers */}
    <path d="M8 10.5C8.5 10 9.5 9.5 10.5 9.5C11 9.5 11.5 9.7 12 10M16 10.5C15.5 10 14.5 9.5 13.5 9.5C13 9.5 12.5 9.7 12 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 12C8.5 11.5 9.5 11 10.5 11C11 11 11.5 11.2 12 11.5M16 12C15.5 11.5 14.5 11 13.5 11C13 11 12.5 11.2 12 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 13.5C8.5 13 9.5 12.5 10.5 12.5C11 12.5 11.5 12.7 12 13M16 13.5C15.5 13 14.5 12.5 13.5 12.5C13 12.5 12.5 12.7 12 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8.5 15C9 14.5 10 14 11 14C11.3 14 11.7 14.1 12 14.3M15.5 15C15 14.5 14 14 13 14C12.7 14 12.3 14.1 12 14.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Icon 8: Éclair with Chocolate Glaze
export const EclairIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Éclair body */}
    <rect x="5" y="11" width="14" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    {/* Chocolate glaze on top */}
    <path d="M6 11C6 10 6.5 9 8 9H16C17.5 9 18 10 18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.2"/>
    <path d="M7 10C7 9.5 7.3 9 8 9H16C16.7 9 17 9.5 17 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Decorative drizzle */}
    <path d="M8 8C8 8 9 7.5 10 8C11 8.5 11 9 12 9C13 9 13 8.5 14 8C15 7.5 16 8 16 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Cream filling visible */}
    <ellipse cx="9" cy="13" rx="0.8" ry="0.6" fill="currentColor" fillOpacity="0.3"/>
    <ellipse cx="15" cy="13" rx="0.8" ry="0.6" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

// Icon 9: Elegant Plated Dessert with Sauce
export const PlatedDessertIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Plate */}
    <ellipse cx="12" cy="17" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5"/>
    {/* Dessert element */}
    <path d="M9 12C9 10.5 10 9 12 9C14 9 15 10.5 15 12V14C15 14.5 14.5 15 14 15H10C9.5 15 9 14.5 9 14V12Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Garnish on top */}
    <path d="M12 6L12 9M10.5 7L13.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="12" cy="5.5" r="1" fill="currentColor" fillOpacity="0.3"/>
    {/* Sauce decoration */}
    <path d="M6 16C6 16 7 15.5 8 16C9 16.5 9 17 10 17M14 17C14 17 15 16.5 16 16C17 15.5 18 16 18 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Icon 10: Globe with Bread Varieties
export const GlobalBreadIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe structure */}
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <path d="M12 4C12 4 14 7 14 12C14 17 12 20 12 20M12 4C12 4 10 7 10 12C10 17 12 20 12 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Bread shapes on globe */}
    <ellipse cx="8" cy="9" rx="1.5" ry="1" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15"/>
    <ellipse cx="16" cy="9" rx="1.5" ry="1" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15"/>
    <ellipse cx="12" cy="15" rx="2" ry="1.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

// Icon 11: Layer Cake with Piping
export const LayerCakeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Three cake layers with filling */}
    <path d="M7 11H17V12.5H7V11Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M7 12.5H17V14H7V12.5Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.25"/>
    <path d="M7 14H17V15.5H7V14Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M7 15.5H17V17H7V15.5Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.25"/>
    <path d="M7 17H17V18.5H7V17Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    {/* Frosting on top */}
    <ellipse cx="12" cy="11" rx="5" ry="1.5" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15"/>
    {/* Decorative piping */}
    <path d="M8 10C8 10 9 9.5 10 10C11 10.5 11 11 12 11C13 11 13 10.5 14 10C15 9.5 16 10 16 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Cherry on top */}
    <circle cx="12" cy="7" r="1.2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 7L12 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Icon 12: Tiered Wedding Cake
export const TieredCakeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom tier */}
    <rect x="6" y="15" width="12" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M6 15C6 15 7.5 14 12 14C16.5 14 18 15 18 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Middle tier */}
    <rect x="8" y="11" width="8" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 11C8 11 9.5 10 12 10C14.5 10 16 11 16 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Top tier */}
    <rect x="10" y="7" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M10 7C10 7 10.8 6.5 12 6.5C13.2 6.5 14 7 14 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Decorative elements */}
    <path d="M7 17L7.5 16.5L8 17M16 17L16.5 16.5L17 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M9 13L9.5 12.5L10 13M14 13L14.5 12.5L15 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Topper */}
    <circle cx="12" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

// Icon 13: Modern Tart with Fruit
export const SweetTartIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tart shell */}
    <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M5.5 13C5.5 11 7 9 12 9C17 9 18.5 11 18.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Fruit arrangement */}
    <circle cx="10" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="14" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="12" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="12" cy="10" r="1.2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2"/>
    {/* Glaze shine */}
    <path d="M8 10C8 10 9 9 11 9C13 9 14 10 14 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// Icon 14: Entremet with Mirror Glaze
export const PetitGateauIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Entremet base */}
    <rect x="7" y="12" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    {/* Mirror glaze top with shine effect */}
    <ellipse cx="12" cy="11.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M8 10C8 9 9 8 12 8C15 8 16 9 16 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Shine highlight */}
    <path d="M10 9C10 9 11 8.5 12 8.5C13 8.5 14 9 14 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
    {/* Decorative elements */}
    <circle cx="9" cy="15" r="0.8" fill="currentColor" fillOpacity="0.3"/>
    <circle cx="15" cy="15" r="0.8" fill="currentColor" fillOpacity="0.3"/>
    <path d="M10.5 14L12 15L13.5 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Gold leaf accent */}
    <circle cx="12" cy="6" r="0.8" fill="currentColor" fillOpacity="0.4"/>
    <path d="M12 6L12 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

// Icon 15: Chocolate Tempering & Garnishes
export const ChocolateIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chocolate bar */}
    <rect x="7" y="9" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
    <path d="M7 12H17M7 15H17M12 9V18M9.5 9V18M14.5 9V18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Melting chocolate drip */}
    <path d="M9 7C9 7 9.5 5.5 10.5 5C11 4.7 11.5 5 11.5 5.5C11.5 6 11 6.5 10.5 7C10 7.5 9.5 8 9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.2"/>
    <path d="M15 7C15 7 14.5 5.5 13.5 5C13 4.7 12.5 5 12.5 5.5C12.5 6 13 6.5 13.5 7C14 7.5 14.5 8 15 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.2"/>
    {/* Decorative shards */}
    <path d="M18 11L19.5 9.5L20 11L18.5 12L18 11Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon 16: Business Operations with Chef Hat
export const BusinessIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Briefcase/storefront */}
    <rect x="6" y="10" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M9 10V8.5C9 7.7 9.7 7 10.5 7H13.5C14.3 7 15 7.7 15 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 13H18" stroke="currentColor" strokeWidth="1.3"/>
    {/* Chef hat on briefcase */}
    <ellipse cx="12" cy="6.5" rx="2.5" ry="1" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.12"/>
    <path d="M10 6.5C10 5.5 10.5 4.5 12 4.5C13.5 4.5 14 5.5 14 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Calculator/price tag detail */}
    <circle cx="12" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15"/>
    <path d="M11 15L13 16M11 16L13 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Map curriculum IDs to icons
export const getCurriculumIcon = (id: number) => {
  const iconMap: { [key: number]: React.FC<IconProps> } = {
    1: BreadIcon,
    2: CupcakeIcon,
    3: CheesecakeIcon,
    4: CroissantIcon,
    5: MacaronIcon,
    6: TartIcon,
    7: LaminatedIcon,
    8: EclairIcon,
    9: PlatedDessertIcon,
    10: GlobalBreadIcon,
    11: LayerCakeIcon,
    12: TieredCakeIcon,
    13: SweetTartIcon,
    14: PetitGateauIcon,
    15: ChocolateIcon,
    16: BusinessIcon,
  };
  
  return iconMap[id] || BreadIcon;
};

// Map weekend curriculum IDs to icons
export const getWeekendCurriculumIcon = (id: number) => {
  const iconMap: { [key: number]: React.FC<IconProps> } = {
    1: CookieIcon,      // Gourmet Cookies
    2: CupcakeIcon,     // Tea Cakes & Travel Cakes
    3: CupcakeIcon,     // Cupcakes & Frosting
    4: CheesecakeIcon,  // Desserts & Cheesecakes
    5: BreadIcon,       // Basic Bread Masterclass
    6: GlobalBreadIcon, // International Breads
    7: LayerCakeIcon,   // Gourmet Pastry Cakes
    8: MacaronIcon,     // Master the Macaron
    9: TieredCakeIcon,  // Celebration Cakes
    10: FondantIcon,    // Fondant Cake Decoration
  };
  
  return iconMap[id] || BreadIcon;
};

// Cookie Icon for Weekend Program
const CookieIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
    <circle cx="15" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

// Fondant Icon for Weekend Program
const FondantIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {/* Draped fondant cake */}
    <rect x="6" y="14" width="12" height="6" />
    <rect x="7" y="10" width="10" height="4" />
    <rect x="8" y="6" width="8" height="4" />
    {/* Decorative draping/ribbon */}
    <path d="M 6 14 Q 9 12 12 14 Q 15 16 18 14" fill="none" />
    <path d="M 7 10 Q 10 8.5 12 10 Q 14 11.5 17 10" fill="none" />
    {/* Decorative bow/flower on top */}
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
    <circle cx="10" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="14" cy="5.5" r="0.8" fill="currentColor" />
  </svg>
);