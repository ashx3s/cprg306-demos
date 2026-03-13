import LoginForm from "@/app/components/auth/LoginForm";
import SignupForm from "@/app/components/auth/SignupForm";
export default function AuthSection() {
  return (
    <section>
      <h2>Authentication</h2>
      <LoginForm />
      <SignupForm />
    </section>
  );
}
