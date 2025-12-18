// lib/styles.ts
export const styles = {
  // ============ PAGE STYLES ============
  pageBackground: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24",
  pageBackgroundWithEffects: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24 relative overflow-hidden",
  
  // ============ BACKGROUND EFFECTS ============
  backgroundEffects: {
    gridPattern: "absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-[0.02]",
    gradientOverlay: "absolute inset-0 bg-gradient-to-br from-gray-900/30 via-background/20 to-gray-950/30",
    circuitOverlay: "absolute inset-0 opacity-[0.03]",
    floatingNumbers: "absolute inset-0 z-0 overflow-hidden",
  },
  
  // ============ TEXT STYLES ============
  text: {
    // Headings
    heading1: "text-5xl md:text-6xl font-bold tracking-tight",
    heading2: "text-3xl md:text-4xl font-bold",
    heading3: "text-2xl font-bold",
    heading4: "text-xl font-bold",
    
    // Body text
    bodyLarge: "text-xl md:text-2xl text-gray-300 leading-relaxed",
    body: "text-gray-300",
    bodySmall: "text-gray-300 text-sm",
    
    // Captions
    caption: "text-sm text-gray-400",
    captionSmall: "text-xs text-gray-500",
    
    // Special
    gradient: "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
    gradientCyan: "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
    gradientEmerald: "bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent",
    gradientPurple: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
  },
  
  // ============ CARD STYLES ============
  card: {
    // Base card
    base: "rounded-xl border border-gray-700 transition-all duration-500 transform-gpu",
    glass: "bg-gray-800/40 backdrop-blur-sm",
    
    // Hover effects
    hover: {
      scale: "hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10",
      elevate: "hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20",
      glow: "hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30",
    },
    
    // Card content
    content: "p-8",
    footer: "px-8 py-6 bg-gray-900/50 border-t border-gray-700",
    
    // Special cards
    stats: "p-8 bg-gray-800/40 rounded-xl border border-gray-700 backdrop-blur-sm",
    philosophy: "p-8 bg-gray-800/40 rounded-xl border border-gray-700 backdrop-blur-sm",
  },
  
  // ============ BUTTON STYLES ============
  button: {
    // Primary button (cyan-to-emerald gradient)
    primary: {
      base: "px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg",
      hover: "hover:from-cyan-500 hover:to-emerald-500 hover:scale-105 hover:shadow-cyan-500/30",
      active: "active:scale-95",
      overlay: "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/0 before:hover:from-white/10 before:hover:to-white/10 before:transition-all before:duration-300",
      text: "relative z-10 group-hover:scale-105 transition-transform duration-300",
    },
    
    // Secondary button (outline)
    secondary: {
      base: "px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg transition-all duration-300",
      hover: "hover:bg-cyan-500 hover:text-black hover:scale-105",
      active: "active:scale-95",
      overlay: "relative overflow-hidden before:absolute before:inset-0 before:bg-cyan-500/0 before:hover:bg-cyan-500 before:transition-all before:duration-300",
      text: "relative z-10 group-hover:scale-105 transition-transform duration-300",
    },
    
    // Tertiary button (minimal)
    tertiary: {
      base: "px-6 py-3 bg-gray-800/50 text-gray-300 font-medium rounded-lg transition-all duration-300",
      hover: "hover:bg-gray-700/50 hover:text-white hover:scale-105",
    },
    
    // Small button
    small: {
      base: "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
      primary: "bg-cyan-600 hover:bg-cyan-700 text-white",
      secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300",
    },
  },
  
  // ============ BADGE & TAG STYLES ============
  badge: {
    base: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
    cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    purple: "bg-purple-500/10 text-purple-300 border border-purple-500/30",
    gray: "bg-gray-800/50 text-gray-400 border border-gray-700",
  },
  
  tag: {
    base: "px-3 py-1 rounded-full text-sm font-medium border",
    expertise: "bg-gray-900/70 text-cyan-300 border border-gray-700",
    department: "bg-gray-900/70 text-emerald-300 border border-gray-700",
    location: "bg-gray-900/70 text-purple-300 border border-gray-700",
    type: "bg-gray-900/70 text-pink-300 border border-gray-700",
  },
  
  // ============ LAYOUT STYLES ============
  layout: {
    // Containers
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    containerNarrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    containerWide: "max-w-7xl mx-auto px-6",
    
    // Spacing
    section: "py-16",
    sectionLarge: "py-20",
    sectionXLarge: "py-24",
    
    // Grids
    grid: {
      twoCol: "grid grid-cols-1 md:grid-cols-2 gap-8",
      threeCol: "grid grid-cols-1 md:grid-cols-3 gap-8",
      fourCol: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
      auto: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
    },
    
    // Flex
    flex: {
      center: "flex items-center justify-center",
      between: "flex items-center justify-between",
      start: "flex items-center justify-start",
      end: "flex items-center justify-end",
      col: "flex flex-col",
      row: "flex flex-row",
    },
  },
  
  // ============ HOVER EFFECTS ============
  hover: {
    // Scale effects
    scale: "hover:scale-105 transition-transform duration-300",
    scaleSmall: "hover:scale-102 transition-transform duration-200",
    
    // Text color changes
    textWhite: "hover:text-white transition-colors duration-300",
    textLight: "hover:text-gray-200 transition-colors duration-300",
    textCyan: "hover:text-cyan-300 transition-colors duration-300",
    textEmerald: "hover:text-emerald-300 transition-colors duration-300",
    
    // Border effects
    borderCyan: "hover:border-cyan-500/50 transition-colors duration-300",
    borderEmerald: "hover:border-emerald-500/50 transition-colors duration-300",
    
    // Background effects
    bgDarken: "hover:bg-gray-800/60 transition-colors duration-300",
    bgLighten: "hover:bg-gray-700/50 transition-colors duration-300",
  },
  
  // ============ ANIMATION CLASSES ============
  animation: {
    // Transitions
    transitionAll: "transition-all duration-300",
    transitionColors: "transition-colors duration-300",
    transitionTransform: "transition-transform duration-300",
    
    // Delays
    delay: {
      short: "delay-75",
      medium: "delay-150",
      long: "delay-300",
    },
    
    // Specific animations
    pulse: "animate-pulse",
    ping: "animate-ping",
    spin: "animate-spin",
    bounce: "animate-bounce",
  },
  
  // ============ GRADIENT BACKGROUNDS ============
  gradient: {
    // Page gradients
    page: "bg-gradient-to-b from-gray-900 via-gray-800 to-black",
    section: "bg-gradient-to-b from-gray-900/80 to-black/80",
    sectionDark: "bg-gradient-to-b from-gray-900/90 to-black/90",
    
    // Card gradients
    card: "bg-gradient-to-br from-gray-800/60 to-gray-900/60",
    cardHover: "bg-gradient-to-br from-gray-800/80 to-gray-900/80",
    
    // Special gradients
    cta: "bg-gradient-to-r from-gray-900 via-black to-gray-900",
    hero: "bg-gradient-to-b from-black/70 to-gray-900/50",
    
    // Color gradients
    cyanToEmerald: "bg-gradient-to-r from-cyan-500 to-emerald-500",
    cyanToBlue: "bg-gradient-to-r from-cyan-500 to-blue-500",
    purpleToPink: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  
  // ============ SHADOWS ============
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    
    // Colored shadows
    cyan: {
      sm: "shadow-cyan-500/10",
      md: "shadow-cyan-500/20",
      lg: "shadow-cyan-500/30",
      xl: "shadow-cyan-500/40",
    },
    emerald: {
      sm: "shadow-emerald-500/10",
      md: "shadow-emerald-500/20",
      lg: "shadow-emerald-500/30",
      xl: "shadow-emerald-500/40",
    },
  },
  
  // ============ BORDER STYLES ============
  border: {
    base: "border",
    gray: "border-gray-700",
    cyan: "border-cyan-500",
    emerald: "border-emerald-500",
    transparent: "border-transparent",
    
    // Border with opacity
    grayOpacity: "border-gray-700/50",
    cyanOpacity: "border-cyan-500/30",
    emeraldOpacity: "border-emerald-500/30",
  },
  
  // ============ UTILITY CLASSES ============
  utility: {
    // Positioning
    absoluteCenter: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    fixedCenter: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    
    // Sizing
    full: "w-full h-full",
    fullWidth: "w-full",
    fullHeight: "h-full",
    
    // Overflow
    overflowHidden: "overflow-hidden",
    overflowVisible: "overflow-visible",
    
    // Z-index
    zBackground: "-z-10",
    zBase: "z-0",
    zContent: "z-10",
    zOverlay: "z-20",
    zModal: "z-50",
    
    // Backdrop
    backdropBlur: "backdrop-blur-sm",
    backdropBlurMd: "backdrop-blur-md",
    backdropBlurLg: "backdrop-blur-lg",
  },
} as const;

// TypeScript type for the styles object
export type AppStyles = typeof styles;