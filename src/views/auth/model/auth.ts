export interface SignInProps {
  email: string
  password: string
}

export interface SignUpProps {
  email: string
  password: string
  repeatPassword: string
  term: boolean
}

export interface SendEmailProps {
  email: string
  password: string
  repeatPassword: string
  term: boolean
}

export interface SendPasswordProps {
  password: string
  repeatPassword: string
  term: boolean
}
