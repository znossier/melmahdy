// Design system constants

export const spacing = {
  section: {
    gap: "space-y-6",
    marginBottom: "mb-12 md:mb-16",
  },
  card: {
    gap: "space-y-4",
    padding: "p-4 md:p-5",
  },
  timeline: {
    containerPadding: "pl-6 md:pl-8",
    logoOffset: {
      mobile: "-left-[26px]",
      desktop: "md:-left-[34px]",
    },
  },
};

export const colors = {
  accent: {
    blue: "border-l-blue-500",
    green: "border-l-green-500",
    purple: "border-l-purple-500",
    indigo: "border-l-indigo-500",
    gray: "border-l-gray-500",
  },
};

export const borderRadius = {
  card: "rounded-xl",
  container: "rounded-3xl",
  full: "rounded-full",
};

export const animations = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    default: "ease-in-out",
    smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
};
