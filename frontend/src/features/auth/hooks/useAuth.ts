import { useMutation } from '@tanstack/react-query'

interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

interface RegisterCredentials {
  firstName: string
  lastName: string
  email: string
  handle: string
  password: string
  agreeToTerms: boolean
}

interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
  }
}

async function loginRequest(credentials: LoginCredentials): Promise<AuthResponse> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))
  if (!credentials.email || !credentials.password) {
    throw new Error('Invalid credentials')
  }
  return {
    token: 'mock-token-xyz',
    user: { id: '1', email: credentials.email, name: 'Alex Johnson' },
  }
}

async function registerRequest(credentials: RegisterCredentials): Promise<AuthResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (!credentials.email || !credentials.password) {
    throw new Error('Registration failed')
  }
  return {
    token: 'mock-token-xyz',
    user: {
      id: '2',
      email: credentials.email,
      name: `${credentials.firstName} ${credentials.lastName}`,
    },
  }
}

export function useLogin() {
  return useMutation({
    mutationFn: loginRequest,
  })
}

export function useRegister() {
  return useMutation({
    mutationFn: registerRequest,
  })
}
