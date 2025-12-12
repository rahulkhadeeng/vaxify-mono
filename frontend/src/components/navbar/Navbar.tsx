import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { SignInButton, SignUpButton } from "./AuthButtons";
import UserNav from "./UserNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const isAuthenticated = false;

  return (
    <div className="sticky top-0 z-50 h-16 px-4 py-3 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex justify-between mx-auto max-w-7xl items-center transition-all">
        <div className="flex gap-10 items-center">
          {/* Logo */}
          <div className="">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
            >
              <img src="/public/logo.svg" alt="" width={30} />
              Vaxify
            </Link>
          </div>

          {/* nav links */}
          <div className="">
            <NavLinks />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {isAuthenticated ? (
            // user dropdown menu for nav
            <div className="flex items-center gap-5">
              <UserNav />
            </div>
          ) : (
            // auth button
            <div className="flex gap-2">
              <SignInButton />

              <SignUpButton />
            </div>
          )}

          {/* navbar for smaller screens */}
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
