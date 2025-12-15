export interface LogoStyle {
  content: string;
  icon?: string;
}

export const logoStyles: { [key: string]: LogoStyle } = {
  spiralyze: {
    content: "↑↑↑",
    icon: "↑",
  },
  valu: {
    content: "valU",
    icon: "★",
  },
  auc: {
    content: "AUC",
  },
  aaib: {
    content: "AAIB",
  },
  mepi: {
    content: "MEPI",
  },
  tls: {
    content: "TLS",
  },
  isee: {
    content: "ISEE",
  },
  mun: {
    content: "MUN",
  },
};

export function getLogoStyle(logoName: string): LogoStyle {
  return logoStyles[logoName.toLowerCase()] || { content: "?" };
}

export function getLogoPath(logoName: string): string {
  return `/logos/${logoName.toLowerCase()}.png`;
}
