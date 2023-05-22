export type Login = {
  email: string;
  password: string;
  rememberMe?: boolean;
};
export type LoginError = {
  emailError: boolean;
  passwordError: boolean;
};
