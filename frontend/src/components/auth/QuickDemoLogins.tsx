import { Button } from "../ui/button";
import { User, UserCog } from "lucide-react";

const QuickDemoLogins = () => {
  const fillCredentials = (email: string) => {
    const emailInput = document.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;

    const passwordInput = document.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;

    if (emailInput) emailInput.value = email;

    if (passwordInput) passwordInput.value = "password";
  };

  return (
    <div className="mt-6 p-4 bg-muted/50 rounded-lg max-w-md space-y-2">
      <p className="text-xs text-muted-foreground text-center mb-3 font-medium">
        Quick Demo Logins
      </p>

      <div className="flex gap-2">
        {demoAccounts.map(({ email, role, icon: Icon }) => (
          <Button
            key={email}
            variant="outline"
            size="sm"
            className="flex justify-between h-auto py-3 px-4 text-xs w-full hover:bg-muted/80 hover:text-accent-foreground cursor-pointer active:scale-95 transition-all"
            onClick={() => fillCredentials(email)}
          >
            <div className="flex items-center ">
              <Icon className="w-4 h-4 mr-2 shrink-0 mb-0.5" />
              <span className="flex-1 text-left">{role}</span>
            </div>

            <code className="text-xs px-2 py-1 rounded-md ml-2">{email}</code>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickDemoLogins;

const demoAccounts = [
  {
    email: "user@test.com",
    role: "User",
    icon: User,
  },
  {
    email: "staff@test.com",
    role: "Staff",
    icon: UserCog,
  },
];
