import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Get Started
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          Create your account to get started
        </p>
      </div>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
