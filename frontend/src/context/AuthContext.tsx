import type { AuthUser } from "@/types/auth";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: AuthUser | null;
}

// context with default val
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider
// to wrap the entire app to provide auth state globally
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// to access the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth muse be called within an AuthProvider comp");
  }

  return context;
};
