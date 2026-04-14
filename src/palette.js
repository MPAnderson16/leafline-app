// Leafline Digital Brand Palette
export const palette = {
  // Primary Colors
  sageGreen: '#7a9b7f',
  softCharcoal: '#3a3a3a',
  warmBeige: '#d4cfc9',
  mutedOlive: '#8a9b7f',
  cream: '#faf9f7',

  // Extended Palette
  darkGreen: '#5a7b5f',
  lightSage: '#a8bea8',
  paleBeige: '#ede9e4',
  offWhite: '#fefdfb',
  white: '#ffffff',

  // Neutrals
  charcoal: '#2a2a2a',
  lightGray: '#e8e5e0',
  mediumGray: '#a8a5a0',
  darkGray: '#5a5a5a',

  // Semantic
  success: '#5a8f5f',
  warning: '#c9a86f',
  error: '#a85f5f',
  info: '#5f8fa8',

  // Transparent utilities
  shadowLight: 'rgba(0, 0, 0, 0.05)',
  shadowMedium: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.15)',
}

// CSS Variables for use in stylesheets
export const getCSSVariables = () => `
  :root {
    --color-sage-green: ${palette.sageGreen};
    --color-soft-charcoal: ${palette.softCharcoal};
    --color-warm-beige: ${palette.warmBeige};
    --color-muted-olive: ${palette.mutedOlive};
    --color-cream: ${palette.cream};
    --color-dark-green: ${palette.darkGreen};
    --color-light-sage: ${palette.lightSage};
    --color-pale-beige: ${palette.paleBeige};
    --color-off-white: ${palette.offWhite};
    --color-white: ${palette.white};
    --color-charcoal: ${palette.charcoal};
    --color-light-gray: ${palette.lightGray};
    --color-medium-gray: ${palette.mediumGray};
    --color-dark-gray: ${palette.darkGray};
    --color-success: ${palette.success};
    --color-warning: ${palette.warning};
    --color-error: ${palette.error};
    --color-info: ${palette.info};
    
    --shadow-light: ${palette.shadowLight};
    --shadow-medium: ${palette.shadowMedium};
    --shadow-dark: ${palette.shadowDark};
  }
`
