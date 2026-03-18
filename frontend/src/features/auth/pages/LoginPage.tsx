import { useForm } from '@tanstack/react-form'
import { useNavigate, Link } from '@tanstack/react-router'
import { Mail, Lock } from 'lucide-react'
import { AuthLayout } from '../../../components/layout/AuthLayout'
import { InputField } from '../../../components/ui/InputField'
import { Button } from '../../../components/ui/Button'
import { Divider } from '../../../components/ui/Divider'
import { GoogleButton } from '../../../components/ui/GoogleButton'
import { LogoMark } from '../../../components/ui/LogoMark'
import { BrandPanel } from '../components/BrandPanel'
import { useLogin } from '../hooks/useAuth'
import { isValidEmail } from '../../../lib/utils'

export function LoginPage() {
  const navigate = useNavigate()
  const login = useLogin()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: async ({ value }) => {
      await login.mutateAsync(value)
      navigate({ to: '/dashboard' })
    },
  })

  return (
    <AuthLayout
      brandPanel={<BrandPanel />}
      formPanel={
        <div className="bg-[var(--color-card)] border-l border-[var(--color-border-subtle)] p-10 md:p-14 flex flex-col justify-center">
          {/* Mobile logo */}
          <div className="md:hidden mb-8">
            <LogoMark size="md" />
          </div>

          <div className="mb-9">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[26px] tracking-[-0.6px] text-[var(--color-text-primary)] mb-1.5">
              Welcome back
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Sign in to continue to NovaMail
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
            className="flex flex-col gap-5"
          >
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
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  icon={<Mail size={15} />}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                  autoComplete="email"
                />
              )}
            </form.Field>

            {/* Password */}
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return 'Password is required'
                  return undefined
                },
              }}
            >
              {(field) => (
                <InputField
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  icon={<Lock size={15} />}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.isTouched ? field.state.meta.errors[0]?.toString() : undefined}
                  autoComplete="current-password"
                />
              )}
            </form.Field>

            {/* Remember me + forgot */}
            <div className="flex items-center justify-between">
              <form.Field name="rememberMe">
                {(field) => (
                  <label className="flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={field.state.value}
                      onChange={(e) => field.handleChange(e.target.checked)}
                      className="w-[15px] h-[15px] accent-[var(--color-accent)] cursor-pointer"
                    />
                    Remember me
                  </label>
                )}
              </form.Field>
              <a
                href="#"
                className="text-[13px] text-[var(--color-text-accent)] hover:underline hover:opacity-75 transition-opacity"
              >
                Forgot password?
              </a>
            </div>

            {/* Error message */}
            {login.isError && (
              <p className="text-[13px] text-[var(--color-error)] bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.2)] rounded-[var(--radius-xs)] px-3 py-2">
                Invalid email or password. Please try again.
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={login.isPending}
            >
              {login.isPending ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>

          <div className="my-6">
            <Divider label="or continue with" />
          </div>

          <GoogleButton />

          <p className="mt-7 text-center text-[13px] text-[var(--color-text-muted)]">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[var(--color-text-accent)] font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      }
    />
  )
}
