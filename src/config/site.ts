/**
 * Site configuration - metadata, URLs, and brand information
 */
export const siteConfig = {
  name: "OM Financial Inc.",
  shortName: "OM Financial",
  description:
    "OM Financial is a leading, national, Canadian-owned Managing General Agency (MGA) with 50+ years of combined experience in life insurance and wealth management.",
  tagline: "Your Partner in Financial Success",
  url: "https://omfinancial.com",
  ogImage: "/images/og-image.png",

  // Contact Information
  contact: {
    email: "info@mgacanada.com",
    phone: {
      toronto: "+1-416-491-7727",
      mississauga: "+1-905-612-0800",
    },
    fax: {
      toronto: "+1-416-491-7725",
      mississauga: "+1-905-612-0801",
    },
  },

  // Office Locations
  offices: {
    toronto: {
      name: "Toronto (Head Office)",
      address: "7191 Yonge Street Suite 711",
      city: "Thornhill",
      province: "ON",
      postalCode: "L3T 0C4",
      country: "Canada",
      phone: "+1-416-491-7727",
      fax: "+1-416-491-7725",
      coordinates: {
        lat: 43.8101,
        lng: -79.4163,
      },
    },
    mississauga: {
      name: "Mississauga",
      address: "218 Export Boulevard Suite 610",
      city: "Mississauga",
      province: "ON",
      postalCode: "L5S 0A7",
      country: "Canada",
      phone: "+1-905-612-0800",
      fax: "+1-905-612-0801",
      coordinates: {
        lat: 43.6859,
        lng: -79.6137,
      },
    },
  },

  // Social Links
  social: {
    facebook: "https://www.facebook.com/omfinancialinc",
    linkedin: "https://www.linkedin.com/in/om-financial/",
    instagram: "https://www.instagram.com/omfinancialinc/",
    twitter: "https://x.com/OmFinancial_Inc",
    youtube: "https://www.youtube.com/channel/UCWWcSS6aA2ysdN35sdMKoag",
  },

  // External Links
  externalLinks: {
    virtgate: "https://virtgate.com",
    googleMaps: "https://maps.app.goo.gl/UTDHAQYWj2sx1xxz8",
  },

  // Copyright
  copyright: {
    year: new Date().getFullYear(),
    holder: "OM Financial Inc.",
  },
} as const

export type SiteConfig = typeof siteConfig
