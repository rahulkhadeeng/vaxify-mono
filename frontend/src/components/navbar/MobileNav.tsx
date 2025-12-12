import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="md:hidden mt-2 transition-all">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <MenuIcon className="w-6 h-6" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center justify-start gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
              >
                <img src="/public/logo.svg" alt="" width={30} />
                Vaxify
              </Link>
            </SheetTitle>
          </SheetHeader>

          <SheetDescription></SheetDescription>

          <div className="mt-10 pl-5 flex flex-col gap-5">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="text-xl text-foreground/70 hover:text-indigo-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const links = [
  {
    name: "Centers",
    href: "/centers",
  },
  {
    name: "Book Appointment",
    href: "/book",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default MobileNav;
