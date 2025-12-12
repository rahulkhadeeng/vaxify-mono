import { Button } from "../ui/button";

export const SignInButton = () => {
  return (
    // fancy button
    // <button className="group relative px-4 flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-white bg-indigo-500 font-medium transition-all duration-300 hover:ring-2 hover:ring-offset-1 hover:ring-indigo-500 active:scale-90 cursor-pointer">
    //   <span className="group relative z-10 flex items-center gap-2 transition-all">
    //     Sign in
    //   </span>

    //   <div className="ease-&lsqb;cubic-bezier(0.19,1,0.22,1)&rsqb; absolute -left-18.75 -top-12.5 z-10 h-38.75 w-8 rotate-35 bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    // </button>

    <Button
      className="cursor-pointer active:scale-90 transition-all duration-300"
      variant="outline"
    >
      Sign In
    </Button>
  );
};

export const SignUpButton = () => {
  return (
    <Button
      className="cursor-pointer active:scale-90 transition-all duration-300"
      variant="outline"
    >
      Sign Up
    </Button>
  );
};
