export const validate = (data) => {
  const { email, password } = data;
  //   regx for email
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};
