import LoginForm from "@/components/auth/LoginForm";
import QuickDemoLogins from "@/components/auth/QuickDemoLogins";

const LoginPage = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Welcome back
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          Sign in to your account to continue
        </p>
      </div>

      <LoginForm />

      <QuickDemoLogins />
    </div>
  );
};

export default LoginPage;
