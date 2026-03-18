import { useForm } from '@tanstack/react-form'
import { useNavigate, Link } from '@tanstack/react-router'
import { User, Mail, AtSign, Lock } from 'lucide-react'
import { InputField } from '../../../components/ui/InputField'
import { Button } from '../../../components/ui/Button'
import { Divider } from '../../../components/ui/Divider'
import { GoogleButton } from '../../../components/ui/GoogleButton'
import { LogoMark } from '../../../components/ui/LogoMark'
import { StepIndicator } from '../components/StepIndicator'
import { PasswordStrength } from '../components/PasswordStrength'
import { TrustBadges } from '../components/TrustBadges'
import { useRegister } from '../hooks/useAuth'
import { isValidEmail } from '../../../lib/utils'

const STEPS = [
  { label: 'Account', status: 'active' as const },
  { label: 'Profile', status: 'inactive' as const },
  { label: 'Plan', status: 'inactive' as const },
]

export function RegisterPage() {
  const navigate = useNavigate()
  const register = useRegister()

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      handle: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
    onSubmit: async ({ value }) => {
      await register.mutateAsync({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        handle: value.handle,
        password: value.password,
        agreeToTerms: value.agreeToTerms,
      })
      navigate({ to: '/dashboard' })
    },
  })

  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">
        <div
          className={[
            'relative overflow-hidden w-full max-w-[520px]',
            'bg-[var(--color-card)] border border-[var(--color-border-subtle)]',
            'rounded-[var(--radius-lg)]',
            'shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_64px_rgba(0,0,0,0.6)]',
            'px-7 py-12 sm:px-12 register-card-glow',
          ].join(' ')}
        >
          {/* Logo */}
          <div className="mb-8">
            <LogoMark size="md" />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[24px] tracking-[-0.5px] text-[var(--color-text-primary)] mb-1.5">
              Create your account
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Start your free 30-day trial. No credit card required.
            </p>
          </div>

          {/* Steps */}
          <StepIndicator steps={STEPS} />

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
            className="flex flex-col gap-[18px]"
          >
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <form.Field
                name="firstName"
                validators={{
                  onChange: ({ value }) => (!value ? 'First name is required' : undefined),
                }}
              >
                {(field) => (
                  <InputField
                    id="firstName"
                    label="First Name"
                    placeholder="Alex"
                    icon={<User size={14} />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                    autoComplete="given-name"
                  />
                )}
              </form.Field>

              <form.Field
                name="lastName"
                validators={{
                  onChange: ({ value }) => (!value ? 'Last name is required' : undefined),
                }}
              >
                {(field) => (
                  <InputField
                    id="lastName"
                    label="Last Name"
                    placeholder="Johnson"
                    icon={<User size={14} />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                    autoComplete="family-name"
                  />
                )}
              </form.Field>
            </div>

            {/* Email */}
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return 'Email is required'
                  if (!isValidEmail(value)) return 'Enter a valid email address'
                  return undefined
                },
              }}
            >
              {(field) => (
                <InputField
                  id="reg-email"
                  type="email"
                  label="Email Address"
                  placeholder="alex@example.com"
                  icon={<Mail size={14} />}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                  autoComplete="email"
                />
              )}
            </form.Field>

            {/* Handle */}
            <form.Field
              name="handle"
              validators={{
                onChange: ({ value }) => (!value ? 'Email handle is required' : undefined),
              }}
            >
              {(field) => (
                <InputField
                  id="handle"
                  label="Email Handle"
                  placeholder="alex.johnson"
                  icon={<AtSign size={14} />}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                  autoComplete="username"
                />
              )}
            </form.Field>

            {/* Password */}
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return 'Password is required'
                  if (value.length < 8) return 'Password must be at least 8 characters'
                  return undefined
                },
              }}
            >
              {(field) => (
                <div>
                  <InputField
                    id="reg-password"
                    type="password"
                    label="Password"
                    placeholder="Min. 8 characters"
                    icon={<Lock size={14} />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                    autoComplete="new-password"
                  />
                  <PasswordStrength password={field.state.value} />
                </div>
              )}
            </form.Field>

            {/* Confirm Password */}
            <form.Field
              name="confirmPassword"
              validators={{
                onChangeListenTo: ['password'],
                onChange: ({ value, fieldApi }) => {
                  if (!value) return 'Please confirm your password'
                  if (value !== fieldApi.form.getFieldValue('password')) {
                    return 'Passwords do not match'
                  }
                  return undefined
                },
              }}
            >
              {(field) => (
                <InputField
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Repeat password"
                  icon={<Lock size={14} />}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                  autoComplete="new-password"
                />
              )}
            </form.Field>

            {/* Terms */}
            <form.Field
              name="agreeToTerms"
              validators={{
                onChange: ({ value }) => (!value ? 'You must agree to the terms' : undefined),
              }}
            >
              {(field) => (
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={field.state.value}
                      onChange={(e) => field.handleChange(e.target.checked)}
                      className="mt-0.5 w-[14px] h-[14px] accent-[var(--color-accent)] flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-[13px] text-[var(--color-text-secondary)] leading-[1.5]">
                      I agree to NovaMail's{' '}
                      <a href="#" className="text-[var(--color-text-accent)] hover:underline">Terms of Service</a>{' '}
                      and{' '}
                      <a href="#" className="text-[var(--color-text-accent)] hover:underline">Privacy Policy</a>.
                      I consent to receiving product updates.
                    </span>
                  </label>
                  {field.state.meta.isTouched && field.state.meta.errors[0] && (
                    <p className="mt-1 text-[11px] text-[var(--color-error)]">
                      {field.state.meta.errors[0].toString()}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* API error */}
            {register.isError && (
              <p className="text-[13px] text-[var(--color-error)] bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.2)] rounded-[var(--radius-xs)] px-3 py-2">
                Registration failed. Please try again.
              </p>
            )}

            <Button type="submit" variant="primary" fullWidth disabled={register.isPending}>
              {register.isPending ? 'Creating account…' : 'Create Account →'}
            </Button>
          </form>

          <div className="my-6">
            <Divider label="or sign up with" />
          </div>

          <GoogleButton />

          <p className="mt-6 text-center text-[13px] text-[var(--color-text-muted)]">
            Already have an account?{' '}
            <Link to="/login" className="text-[var(--color-text-accent)] font-medium hover:underline">
              Sign in
            </Link>
          </p>

          <TrustBadges />
        </div>
      </div>
    </>
  )
}
