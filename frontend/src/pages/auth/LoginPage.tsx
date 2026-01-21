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

      <div className="mt-6 p-4 bg-muted/50 rounded-lg text-xs text-center max-w-md mx-auto space-y-1">
        <div>Demo Logins (any password):</div>
        <div>
          User → <code>user@test.com</code>
        </div>
        <div>
          Staff → <code>staff@test.com</code>
        </div>
        <div>
          Admin → <code>admin@test.com</code>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
