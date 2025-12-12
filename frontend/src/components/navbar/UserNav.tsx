import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  CalendarCheck,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  User,
} from "lucide-react";
import Avvvatars from "avvvatars-react";

const UserNav = () => {
  const user = {
    name: "FullName",
    email: "email@gmail.com",
    image: "",
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage src={user.image} />

            <AvatarFallback>
              <Avvvatars value={user.email} />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuLabel className="pl-2 pr-4">
            <div className="flex flex-col gap-1">
              <p className="font-medium leading-none capitalize">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground max-w-40 truncate">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {userDropdownItems.map((item, idx) => (
            <Link to={item.href} key={idx} className="flex gap-2 items-center">
              <DropdownMenuItem className="hover:bg-gray-100 transition-all w-full cursor-pointer">
                <item.icon className="text-xl" />
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}

          <DropdownMenuSeparator />

          <Link to="/logout" className="flex gap-2 items-center">
            <DropdownMenuItem className="hover:bg-gray-100 transition-all w-full cursor-pointer">
              <LogOut className="text-xl" />
              Logout
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const userDropdownItems = [
  {
    name: "Dashboard",
    href: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    href: "/user/profile",
    icon: User,
  },
  {
    name: "My Appointments",
    href: "/user/appointments",
    icon: CalendarCheck,
  },
  {
    name: "Book Appointment",
    href: "/book",
    icon: PlusCircle,
  },
];

export default UserNav;
