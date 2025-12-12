import LoginForm from "@/components/auth/LoginForm";

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
    </div>
  );
};

export default LoginPage;
