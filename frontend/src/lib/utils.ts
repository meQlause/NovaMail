/**
 * Merges class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Validates an email address format.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Returns a password strength score 0–4.
 */
export function getPasswordStrength(password: string): number {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4)
}

export function getPasswordStrengthLabel(score: number): string {
  const labels = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong']
  return labels[score] ?? 'Very weak'
}

export function getPasswordStrengthColor(score: number): string {
  const colors = [
    'bg-error',
    'bg-error',
    'bg-warning',
    'bg-success',
    'bg-success',
  ]
  return colors[score] ?? 'bg-error'
}
