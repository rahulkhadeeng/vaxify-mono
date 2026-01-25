import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const { pathname } = useLocation();

  const isActive = (pathname: string, href: string) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <div className="hidden md:flex items-center pt-1 gap-6 transition-all">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.href}
          className={`font-medium hover:text-foreground/95 transition-all
             ${
               isActive(pathname, link.href)
                 ? "text-foreground/95"
                 : "text-foreground/70"
             }
            `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const links = [
  // {
  //   name: "Book Appointment",
  //   href: "/centers",
  // },
  {
    name: "Centers",
    href: "/centers",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default NavLinks;
