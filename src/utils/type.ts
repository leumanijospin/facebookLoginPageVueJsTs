interface User {
  email: string;
  password: string;
}

export type Data = {
  user: User;
  emailError: string;
  passwordError: string;
};
