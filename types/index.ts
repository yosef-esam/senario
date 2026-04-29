// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  href: string
  label: string
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface Stat {
  num: string
  label: string
}

// ─── Challenges ───────────────────────────────────────────────────────────────

export interface Challenge {
  num: string
  title: string
  text: string
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  icon: string
  num: string
  title: string
  text: string
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export interface Plan {
  id: string
  name: string
  arabic: string
  price: string
  currency: string
  featured: boolean
  features: string[]
}

// ─── Clients ──────────────────────────────────────────────────────────────────

export interface Client {
  Image: string
  name?: string
  duration?: string
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactField {
  id: string
  label: string
  placeholder: string
  required: boolean
  minLength: number
  half: boolean
}

export interface PackageOption {
  value: string
  label: string
}

export interface ContactFormData {
  name: string
  specialty: string
  location: string
  package: string
  details: string
}

export interface ContactFormErrors {
  name?: string | null
  specialty?: string | null
  location?: string | null
  [key: string]: string | null | undefined
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface SocialLink {
  icon: string
  href: string
}
