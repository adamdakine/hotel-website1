/**
 * ============================================================================
 * HÔTEL LA MAMOUNIA MARRAKECH - PALACE STYLING & TAILWIND CONFIGURATION
 * File: style.js
 * ============================================================================
 */

// Configure Tailwind CSS luxury palette and design tokens
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          mamounia: {
            ivory: '#FAF8F5',       // Primary luminous light background
            alabaster: '#FDFBF7',   // Ultra-soft card background
            cream: '#F4EFEA',       // Subtle section background accent
            snow: '#FFFFFF',        // Pure white card surfaces
            sand: '#EDE5D8',        // Elegant hairline border neutral
            charcoal: '#191715',    // High-contrast velvety luxury text
            muted: '#5C5549',       // Refined secondary editorial text
            gold: '#C5A059',        // Iconic Mamounia royal brass & gold
            champagne: '#D4AF37',   // Radiant champagne highlight
            'gold-light': '#F7EEDD',
            'gold-dark': '#916F2A',
            terracotta: '#C26749',  // Warm Marrakech ochre/terracotta
            emerald: '#0F4C3A',     // Lush 8-hectare historic garden emerald
            'emerald-light': '#E6F0EB',
            blue: '#274472'         // Majorelle art-deco cobalt accent
          }
        },
        fontFamily: {
          serif: ['Cormorant Garamond', 'serif'],
          sans: ['Plus Jakarta Sans', 'sans-serif'],
          arabic: ['Cairo', 'sans-serif']
        },
        boxShadow: {
          'palace': '0 10px 35px -5px rgba(25, 23, 21, 0.04), 0 20px 45px -10px rgba(197, 160, 89, 0.08)',
          'capsule': '0 20px 60px -10px rgba(25, 23, 21, 0.09), 0 0 30px 0 rgba(197, 160, 89, 0.14)',
          'gold-glow': '0 0 35px -5px rgba(197, 160, 89, 0.35)',
          'card-hover': '0 25px 60px -12px rgba(25, 23, 21, 0.08), 0 0 25px 0 rgba(197, 160, 89, 0.14)',
          'luxury-bevel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 12px 32px -4px rgba(197, 160, 89, 0.08)'
        },
        keyframes: {
          kenburns: {
            '0%': { transform: 'scale(1) translate(0, 0)' },
            '50%': { transform: 'scale(1.07) translate(-0.5%, -0.5%)' },
            '100%': { transform: 'scale(1) translate(0, 0)' }
          },
          shimmer: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(200%)' }
          },
          subtlePulse: {
            '0%, 100%': { opacity: '1', transform: 'scale(1)' },
            '50%': { opacity: '0.90', transform: 'scale(1.02)' }
          }
        },
        animation: {
          'kenburns': 'kenburns 26s ease-in-out infinite alternate',
          'shimmer': 'shimmer 2.4s infinite',
          'subtle-pulse': 'subtlePulse 3s ease-in-out infinite'
        }
      }
    }
  };
}
