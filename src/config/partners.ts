// Centralized partner configuration with logo mappings
// All partner logos are in /public/images/logos/partners/

export interface Partner {
  id: string // URL slug
  name: string
  logo: string // filename in /public/images/logos/partners/
  category: "life" | "health" | "wealth" | "specialty"
  tier: "premier" | "major" | "partner"
  description: string
  longDescription?: string
  products?: string[]
  website?: string
}

// Helper to get logo path
export function getLogoPath(logo: string): string {
  return `/images/logos/partners/${logo}`
}

// Helper to create slug from name
export function createSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

export const partners: Partner[] = [
  // ============================================
  // PREMIER PARTNERS
  // ============================================
  {
    id: "manulife",
    name: "Manulife",
    logo: "manulife-white.png",
    category: "life",
    tier: "premier",
    description: "Comprehensive life and living benefits solutions",
    longDescription:
      "Manulife is one of Canada's largest and most trusted insurance companies, offering a comprehensive suite of life insurance, living benefits, and wealth management solutions. As a premier partner, OM Financial advisors have access to Manulife's full product portfolio and dedicated support team.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Segregated Funds",
      "Group Benefits",
    ],
    website: "https://www.manulife.ca",
  },
  {
    id: "sun-life",
    name: "Sun Life",
    logo: "sunlife-white.png",
    category: "life",
    tier: "premier",
    description: "Insurance, investments, and group benefits",
    longDescription:
      "Sun Life Financial is a leading international financial services organization providing insurance, wealth, and asset management solutions. Their commitment to helping Canadians achieve lifetime financial security makes them an ideal partner for OM Financial advisors.",
    products: [
      "Term Life Insurance",
      "Permanent Life Insurance",
      "Critical Illness Insurance",
      "Health Insurance",
      "Dental Insurance",
      "Investment Solutions",
      "Group Retirement",
    ],
    website: "https://www.sunlife.ca",
  },
  {
    id: "canada-life",
    name: "Canada Life",
    logo: "canada-life-white.png",
    category: "life",
    tier: "premier",
    description: "Individual and group insurance products",
    longDescription:
      "Canada Life is one of Canada's leading insurers, providing life, health, and wealth solutions to individuals and groups. With a history spanning over 175 years, they offer stability and expertise that advisors can rely on.",
    products: [
      "Life Insurance",
      "Living Benefits",
      "Health & Dental",
      "Travel Insurance",
      "Wealth Solutions",
      "Group Benefits",
      "Pension Plans",
    ],
    website: "https://www.canadalife.com",
  },
  {
    id: "desjardins-insurance",
    name: "Desjardins Insurance",
    logo: "desjardins-white.png",
    category: "life",
    tier: "premier",
    description: "Full suite of insurance and wealth solutions",
    longDescription:
      "Desjardins Insurance offers a comprehensive range of insurance products backed by the financial strength of the Desjardins Group. Their innovative products and competitive pricing make them a valued partner.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Critical Illness",
      "Disability Insurance",
      "Segregated Funds",
      "Group Insurance",
    ],
    website: "https://www.desjardinslifeinsurance.com",
  },
  {
    id: "ia-financial-group",
    name: "iA Financial Group",
    logo: "ia-financial-white.png",
    category: "life",
    tier: "premier",
    description: "Insurance, savings, and retirement solutions",
    longDescription:
      "iA Financial Group is a leading Canadian insurance and wealth management company with over 125 years of experience. They offer innovative products and excellent advisor support.",
    products: [
      "Term Insurance",
      "Permanent Insurance",
      "Living Benefits",
      "Savings Products",
      "Retirement Solutions",
      "Group Benefits",
    ],
    website: "https://ia.ca",
  },
  {
    id: "rbc-insurance",
    name: "RBC Insurance",
    logo: "rbc-white.png",
    category: "life",
    tier: "premier",
    description: "Life, health, and travel insurance",
    longDescription:
      "RBC Insurance, backed by one of Canada's largest banks, offers a range of insurance solutions with competitive pricing and strong financial backing.",
    products: [
      "Term Life Insurance",
      "Critical Illness",
      "Disability Insurance",
      "Health Insurance",
      "Travel Insurance",
    ],
    website: "https://www.rbcinsurance.com",
  },

  // ============================================
  // MAJOR PARTNERS
  // ============================================
  {
    id: "bmo-insurance",
    name: "BMO Insurance",
    logo: "bmo-white.png",
    category: "life",
    tier: "major",
    description: "Life insurance and living benefits",
    longDescription:
      "BMO Insurance provides straightforward insurance solutions backed by the strength and stability of BMO Financial Group.",
    products: [
      "Term Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Travel Insurance",
    ],
    website: "https://www.bmoinsurance.com",
  },
  {
    id: "empire-life",
    name: "Empire Life",
    logo: "empire-life-white.png",
    category: "life",
    tier: "major",
    description: "Life insurance and wealth management",
    longDescription:
      "Empire Life is a proud Canadian company offering innovative insurance and wealth management solutions with a focus on advisor partnership.",
    products: [
      "Term Life Insurance",
      "Whole Life",
      "Universal Life",
      "Critical Illness",
      "Disability",
      "Segregated Funds",
    ],
    website: "https://www.empire.ca",
  },
  {
    id: "equitable-life",
    name: "Equitable Life",
    logo: "equitable-life-white.png",
    category: "life",
    tier: "major",
    description: "Individual and group solutions",
    longDescription:
      "Equitable Life of Canada is a mutual company focused on providing competitive insurance and savings products while maintaining financial strength.",
    products: [
      "Term Insurance",
      "Permanent Insurance",
      "Critical Illness",
      "Disability",
      "Savings Plans",
    ],
    website: "https://www.equitable.ca",
  },
  {
    id: "foresters-financial",
    name: "Foresters Financial",
    logo: "foresters-financial-white.png",
    category: "life",
    tier: "major",
    description: "Life insurance with member benefits",
    longDescription:
      "Foresters Financial is a fraternal benefit society offering life insurance products along with unique member benefits including scholarships and community grants.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Critical Illness",
      "Member Benefits",
    ],
    website: "https://www.foresters.com",
  },
  {
    id: "beneva",
    name: "Beneva",
    logo: "la-capitale-white.png", // Beneva was formed from La Capitale merger
    category: "life",
    tier: "major",
    description: "Insurance and financial services",
    longDescription:
      "Beneva is Quebec's largest mutual insurer, formed from the merger of SSQ and La Capitale, offering comprehensive insurance and financial services.",
    products: [
      "Life Insurance",
      "Critical Illness",
      "Disability",
      "Group Benefits",
      "Savings",
    ],
    website: "https://www.beneva.ca",
  },
  {
    id: "humania-assurance",
    name: "Humania Assurance",
    logo: "humania-white.png",
    category: "life",
    tier: "major",
    description: "Simplified issue life insurance",
    longDescription:
      "Humania Assurance specializes in simplified issue and guaranteed issue life insurance products, making coverage accessible to more Canadians.",
    products: [
      "Simplified Issue Life",
      "Guaranteed Issue Life",
      "Final Expense Insurance",
    ],
    website: "https://www.humania.ca",
  },

  // ============================================
  // HEALTH & BENEFITS PARTNERS
  // ============================================
  {
    id: "green-shield-canada",
    name: "Green Shield Canada",
    logo: "greennsheild-white.png",
    category: "health",
    tier: "major",
    description: "Health and dental benefits",
    longDescription:
      "Green Shield Canada is a leading health and dental benefits provider, offering innovative solutions for individuals and groups.",
    products: [
      "Health Benefits",
      "Dental Benefits",
      "Drug Coverage",
      "Mental Health",
      "Digital Health",
    ],
    website: "https://www.greenshield.ca",
  },
  {
    id: "blue-cross",
    name: "Blue Cross",
    logo: "blue-cross-white.png",
    category: "health",
    tier: "major",
    description: "Health, dental, and travel coverage",
    longDescription:
      "Blue Cross is one of Canada's most recognized health benefits brands, offering comprehensive health, dental, and travel insurance solutions.",
    products: [
      "Health Insurance",
      "Dental Insurance",
      "Travel Insurance",
      "Vision Care",
      "Group Benefits",
    ],
    website: "https://www.bluecross.ca",
  },
  {
    id: "medavie-blue-cross",
    name: "Medavie Blue Cross",
    logo: "blue-cross-white.png", // Uses Blue Cross branding
    category: "health",
    tier: "partner",
    description: "Health and travel insurance",
    longDescription:
      "Medavie Blue Cross provides health, dental, travel, life, and disability benefits to individuals and groups across Atlantic Canada and beyond.",
    products: [
      "Health Benefits",
      "Dental Coverage",
      "Travel Insurance",
      "Life Insurance",
      "Disability",
    ],
    website: "https://www.medaviebc.ca",
  },
  {
    id: "claimsecure",
    name: "ClaimSecure",
    logo: "sli-white.png", // Placeholder - may need specific logo
    category: "health",
    tier: "partner",
    description: "Health spending accounts",
    longDescription:
      "ClaimSecure specializes in Health Spending Accounts (HSAs) and flexible benefit solutions for businesses of all sizes.",
    products: [
      "Health Spending Accounts",
      "Flexible Benefits",
      "Administrative Services",
    ],
    website: "https://www.claimsecure.com",
  },

  // ============================================
  // WEALTH PARTNERS
  // ============================================
  {
    id: "ci-investments",
    name: "CI Investments",
    logo: "sli-white.png", // Placeholder
    category: "wealth",
    tier: "major",
    description: "Segregated funds and investments",
    longDescription:
      "CI Investments is one of Canada's largest investment fund companies, offering a wide range of segregated funds and investment solutions.",
    products: ["Segregated Funds", "Mutual Funds", "ETFs", "Portfolio Solutions"],
    website: "https://www.ci.com",
  },
  {
    id: "fidelity-investments",
    name: "Fidelity Investments",
    logo: "sli-white.png", // Placeholder
    category: "wealth",
    tier: "major",
    description: "Investment solutions",
    longDescription:
      "Fidelity Investments Canada offers a broad range of investment products and services, backed by global investment expertise.",
    products: [
      "Mutual Funds",
      "ETFs",
      "Managed Portfolios",
      "Retirement Solutions",
    ],
    website: "https://www.fidelity.ca",
  },
  {
    id: "agf",
    name: "AGF",
    logo: "sli-white.png", // Placeholder
    category: "wealth",
    tier: "partner",
    description: "Investment management",
    longDescription:
      "AGF Management Limited is an independent investment management firm with diverse investment solutions.",
    products: ["Mutual Funds", "ETFs", "Segregated Funds", "Private Client"],
    website: "https://www.agf.com",
  },
  {
    id: "dynamic-funds",
    name: "Dynamic Funds",
    logo: "sli-white.png", // Placeholder
    category: "wealth",
    tier: "partner",
    description: "Actively managed investments",
    longDescription:
      "Dynamic Funds offers actively managed investment solutions designed to deliver competitive risk-adjusted returns.",
    products: ["Mutual Funds", "ETFs", "Private Pools", "Strategic Portfolios"],
    website: "https://www.dynamic.ca",
  },
  {
    id: "mackenzie-investments",
    name: "Mackenzie Investments",
    logo: "sli-white.png", // Placeholder
    category: "wealth",
    tier: "partner",
    description: "Mutual funds and ETFs",
    longDescription:
      "Mackenzie Investments is one of Canada's largest investment management companies, offering a diverse range of mutual funds and ETFs.",
    products: ["Mutual Funds", "ETFs", "Segregated Funds", "Portfolio Solutions"],
    website: "https://www.mackenzieinvestments.com",
  },

  // ============================================
  // SPECIALTY PARTNERS
  // ============================================
  {
    id: "specialty-life",
    name: "Specialty Life",
    logo: "sli-white.png",
    category: "specialty",
    tier: "partner",
    description: "Impaired risk specialists",
    longDescription:
      "Specialty Life focuses on providing insurance solutions for clients with health conditions or other risk factors that make standard coverage difficult to obtain.",
    products: ["Impaired Risk Life Insurance", "Substandard Risk Coverage"],
  },
  {
    id: "assumption-life",
    name: "Assumption Life",
    logo: "assumption-life-white.png",
    category: "specialty",
    tier: "partner",
    description: "Simplified and guaranteed issue",
    longDescription:
      "Assumption Life specializes in simplified issue and guaranteed issue life insurance, making coverage accessible without medical exams.",
    products: [
      "Simplified Issue Life",
      "Guaranteed Issue Life",
      "Final Expense",
    ],
    website: "https://www.assumption.ca",
  },
  {
    id: "edge-benefits",
    name: "Edge Benefits",
    logo: "edge-benefits-white.png",
    category: "specialty",
    tier: "partner",
    description: "Group benefits for small business",
    longDescription:
      "Edge Benefits provides flexible group benefit solutions designed specifically for small businesses and professional associations.",
    products: [
      "Small Group Benefits",
      "Association Benefits",
      "Flexible Plans",
    ],
    website: "https://www.edgebenefits.com",
  },
  {
    id: "grouphealth",
    name: "GroupHEALTH",
    logo: "sli-white.png", // Placeholder
    category: "specialty",
    tier: "partner",
    description: "Innovative group solutions",
    longDescription:
      "GroupHEALTH offers innovative group benefit solutions with a focus on cost management and employee wellness.",
    products: ["Group Health", "Drug Programs", "Wellness Solutions"],
    website: "https://www.grouphealth.ca",
  },
  {
    id: "manulife-vitality",
    name: "Manulife Vitality",
    logo: "manulife-white.png",
    category: "specialty",
    tier: "partner",
    description: "Wellness-based insurance",
    longDescription:
      "Manulife Vitality rewards healthy behaviors with discounts and rewards, encouraging clients to live healthier lives.",
    products: [
      "Vitality Life Insurance",
      "Wellness Rewards",
      "Health Tracking",
    ],
    website: "https://www.manulife.ca/vitality",
  },
  {
    id: "tugo",
    name: "Tugo",
    logo: "tugo-white.png",
    category: "specialty",
    tier: "major",
    description: "Travel insurance solutions",
    longDescription:
      "Tugo is Canada's leading travel insurance provider, offering comprehensive coverage for Canadians travelling abroad.",
    products: [
      "Single Trip Travel",
      "Multi-Trip Annual",
      "Super Visa Insurance",
      "Visitors Insurance",
    ],
    website: "https://www.tugo.com",
  },
  {
    id: "allianz",
    name: "Allianz",
    logo: "allianz-white.png",
    category: "specialty",
    tier: "partner",
    description: "Travel and specialty insurance",
    longDescription:
      "Allianz Global Assistance provides travel insurance and assistance services with global reach and 24/7 support.",
    products: [
      "Travel Medical Insurance",
      "Trip Cancellation",
      "Emergency Assistance",
    ],
    website: "https://www.allianz.ca",
  },
  {
    id: "gms",
    name: "GMS",
    logo: "gms-white.png",
    category: "specialty",
    tier: "partner",
    description: "Travel and health insurance",
    longDescription:
      "GMS (Group Medical Services) provides travel and health insurance solutions with a focus on customer service.",
    products: [
      "Travel Insurance",
      "Health Insurance",
      "Student Plans",
      "Visitor Plans",
    ],
    website: "https://www.gms.ca",
  },
  {
    id: "21st-century",
    name: "21st Century",
    logo: "21st-century-white.png",
    category: "specialty",
    tier: "partner",
    description: "Super visa and travel insurance",
    longDescription:
      "21st Century specializes in travel insurance products including super visa insurance for visitors to Canada.",
    products: [
      "Super Visa Insurance",
      "Visitors Insurance",
      "Travel Medical",
      "Trip Cancellation",
    ],
    website: "https://www.21stcentury.ca",
  },
  {
    id: "destination-travel",
    name: "Destination Travel",
    logo: "travelance-white.png", // Using travelance as placeholder
    category: "specialty",
    tier: "partner",
    description: "Travel insurance specialists",
    longDescription:
      "Destination Travel Group offers a range of travel insurance products for Canadians travelling domestically and internationally.",
    products: [
      "Travel Medical",
      "Trip Cancellation",
      "Flight Delay",
      "Baggage Protection",
    ],
    website: "https://www.destinationtravel.ca",
  },
  {
    id: "co-operators",
    name: "Co-operators",
    logo: "co-operators-white.png",
    category: "life",
    tier: "partner",
    description: "Insurance and financial services",
    longDescription:
      "Co-operators is a leading Canadian financial services co-operative, offering a wide range of insurance and investment products.",
    products: [
      "Life Insurance",
      "Health Insurance",
      "Travel Insurance",
      "Investment Solutions",
    ],
    website: "https://www.cooperators.ca",
  },
  {
    id: "canada-protection-plan",
    name: "Canada Protection Plan",
    logo: "canada-protection-plan-white.png",
    category: "specialty",
    tier: "partner",
    description: "No medical life insurance",
    longDescription:
      "Canada Protection Plan specializes in no medical life insurance, offering coverage without medical exams or blood tests.",
    products: [
      "No Medical Life Insurance",
      "Guaranteed Issue",
      "Simplified Issue",
      "Critical Illness",
    ],
    website: "https://www.cpp.ca",
  },
  {
    id: "ivari",
    name: "Ivari",
    logo: "ivari-white.png",
    category: "life",
    tier: "partner",
    description: "Individual life insurance",
    longDescription:
      "Ivari provides individual life insurance solutions with a focus on simplicity and advisor support.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life",
      "Critical Illness",
    ],
    website: "https://www.ivari.ca",
  },
  {
    id: "wawanesa",
    name: "Wawanesa",
    logo: "wawanesa-life-white.png",
    category: "life",
    tier: "partner",
    description: "Life and living benefits",
    longDescription:
      "Wawanesa Life is a Canadian mutual insurer offering life insurance and living benefits products.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Critical Illness",
      "Disability Insurance",
    ],
    website: "https://www.wawanesa.com",
  },
  {
    id: "travelance",
    name: "Travelance",
    logo: "travelance-white.png",
    category: "specialty",
    tier: "partner",
    description: "Travel insurance solutions",
    longDescription:
      "Travelance provides comprehensive travel insurance solutions for Canadians travelling abroad.",
    products: [
      "Travel Medical Insurance",
      "Trip Cancellation",
      "Super Visa Insurance",
      "Visitors to Canada",
    ],
    website: "https://www.travelance.ca",
  },
  {
    id: "uv-insurance",
    name: "UV Insurance",
    logo: "uv-insurance-white.png",
    category: "specialty",
    tier: "partner",
    description: "Specialty insurance solutions",
    longDescription:
      "UV Insurance provides specialty insurance products for unique coverage needs.",
    products: ["Specialty Coverage", "Unique Risk Solutions"],
  },
  {
    id: "cumis",
    name: "CUMIS",
    logo: "cumis-white.png",
    category: "life",
    tier: "partner",
    description: "Credit union insurance",
    longDescription:
      "CUMIS provides insurance solutions through credit unions across Canada.",
    products: [
      "Life Insurance",
      "Creditor Insurance",
      "Group Benefits",
    ],
    website: "https://www.cumis.com",
  },
  {
    id: "serennia-life",
    name: "Serennia Life",
    logo: "serennia-life-white.png",
    category: "specialty",
    tier: "partner",
    description: "Final expense insurance",
    longDescription:
      "Serennia Life specializes in final expense and guaranteed issue life insurance products.",
    products: [
      "Final Expense Insurance",
      "Guaranteed Issue Life",
      "Simplified Issue",
    ],
  },
  {
    id: "my-dignity",
    name: "My Dignity",
    logo: "my-dignity-white.png",
    category: "specialty",
    tier: "partner",
    description: "Funeral expense coverage",
    longDescription:
      "My Dignity provides funeral expense coverage and final arrangement planning services.",
    products: [
      "Funeral Expense Insurance",
      "Final Expense Coverage",
    ],
  },
  {
    id: "b2b-bank",
    name: "B2B Bank",
    logo: "b2b-bank-white.png",
    category: "wealth",
    tier: "partner",
    description: "Banking solutions for advisors",
    longDescription:
      "B2B Bank provides banking and lending solutions specifically designed for financial advisors and their clients.",
    products: [
      "Investment Loans",
      "RRSP Loans",
      "Banking Solutions",
    ],
    website: "https://www.b2bbank.com",
  },
]

// Filtered lists by tier
export const premierPartners = partners.filter((p) => p.tier === "premier")
export const majorPartners = partners.filter((p) => p.tier === "major")
export const regularPartners = partners.filter((p) => p.tier === "partner")

// Filtered lists by category
export const lifePartners = partners.filter((p) => p.category === "life")
export const healthPartners = partners.filter((p) => p.category === "health")
export const wealthPartners = partners.filter((p) => p.category === "wealth")
export const specialtyPartners = partners.filter((p) => p.category === "specialty")

// Get partner by ID
export function getPartnerById(id: string): Partner | undefined {
  return partners.find((p) => p.id === id)
}

// Get partners by category
export function getPartnersByCategory(category: Partner["category"]): Partner[] {
  return partners.filter((p) => p.category === category)
}

// Get partners by tier
export function getPartnersByTier(tier: Partner["tier"]): Partner[] {
  return partners.filter((p) => p.tier === tier)
}

// Category display info
export const categoryInfo = {
  life: {
    label: "Life Insurance",
    description: "Term, whole life, universal life, and living benefits",
  },
  health: {
    label: "Health & Benefits",
    description: "Health, dental, and extended healthcare coverage",
  },
  wealth: {
    label: "Wealth Management",
    description: "Segregated funds, mutual funds, and investment solutions",
  },
  specialty: {
    label: "Specialty Products",
    description: "Travel, simplified issue, and niche solutions",
  },
} as const

// Tier display info
export const tierInfo = {
  premier: {
    label: "Premier Partner",
    description: "Strategic partnerships with Canada's largest insurers",
  },
  major: {
    label: "Major Partner",
    description: "Established relationships with leading carriers",
  },
  partner: {
    label: "Partner",
    description: "Specialized carriers for niche products",
  },
} as const
