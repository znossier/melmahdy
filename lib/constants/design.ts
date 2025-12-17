// Design system constants

// Spacing tokens
export const spacing = {
  section: {
    marginBottom: "mb-12 md:mb-16",
    scrollMargin: "scroll-mt-24",
    gap: "space-y-6",
  },
  card: {
    padding: "p-4 md:p-5",
    paddingLarge: "p-5 md:p-6",
    paddingXLarge: "p-6 md:p-8 lg:p-10",
    gap: "space-y-4",
    gapLarge: "space-y-6",
  },
  timeline: {
    containerPadding: "pl-6 md:pl-8",
    logoOffset: {
      mobile: "-left-[26px]",
      desktop: "md:-left-[34px]",
    },
  },
  content: {
    container: "max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-6 sm:py-8 md:py-12 lg:py-16",
  },
};

// Color tokens
export const colors = {
  background: {
    primary: "bg-white",
    secondary: "bg-gray-50/50",
    card: "bg-white/50",
    cardHover: "bg-white/80",
    gradient: "bg-gradient-to-br from-white to-gray-50/30",
    gradientCard: "bg-gradient-to-br from-white to-gray-50/50",
  },
  border: {
    default: "border-gray-200",
    hover: "border-gray-300",
    light: "border-gray-100",
    accent: "border-gray-200/60",
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-700",
    tertiary: "text-gray-600",
    muted: "text-gray-500",
    light: "text-gray-400",
  },
  accent: {
    blue: {
      border: "border-l-blue-500",
      bg: "bg-blue-50",
      bgHover: "bg-blue-100",
      text: "text-blue-600",
      textDark: "text-blue-700",
    },
    green: {
      border: "border-l-green-500",
      dot: "bg-green-500",
      ring: "border-green-500",
    },
    purple: "border-l-purple-500",
    indigo: "border-l-indigo-500",
    gray: "border-l-gray-500",
  },
  year: {
    "2024+": "border-l-blue-500",
    "2022-2023": "border-l-purple-500",
    "2020-2021": "border-l-indigo-500",
    default: "border-l-gray-500",
  },
};

// Border radius tokens
export const borderRadius = {
  card: "rounded-xl",
  container: "rounded-3xl",
  full: "rounded-full",
  button: "rounded-lg",
};

// Typography tokens
export const typography = {
  heading: {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
  },
  body: {
    base: "text-sm sm:text-base",
    small: "text-xs sm:text-sm",
    tiny: "text-xs",
  },
  label: {
    section: "text-xs uppercase tracking-wider text-gray-400 font-semibold",
    category: "text-xs uppercase tracking-wider text-gray-400 font-semibold",
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
};

// Component-specific tokens
export const components = {
  card: {
    base: "bg-white/50 border border-gray-200 rounded-xl p-4 md:p-5 transition-all",
    hover: "hover:bg-white/80 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5",
    interactive: "cursor-pointer",
  },
  section: {
    base: "mb-12 md:mb-16 scroll-mt-24",
    wrapper: "bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200/60 shadow-lg",
  },
  button: {
    primary: "bg-black text-white rounded-lg font-medium transition-all hover:bg-gray-800 active:scale-95 shadow-sm",
    secondary: "bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all",
  },
  link: {
    base: "transition-all duration-200",
    hover: "hover:text-blue-600 hover:underline",
  },
};
