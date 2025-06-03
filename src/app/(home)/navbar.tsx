import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";




const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],   
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;


};

const NavbarItems = ({
    //href,
    children,
    //isActive ,
}: NavbarItemProps) => {
  return(
     <Button>
     {children}
     </Button>
  );
};


const navbarItems = [
  {href : "/", children: "Home"},
  {href : "/home", children: "Contact"},
  {href : "/about", children: "About"},
];

export const Navbar = () => {
    return(
      <nav className="bg-white p-4 border-b  flex justify-between items-center font font-medium">
      <Link href="/" className="pl-6">
       <span className={cn(poppins.className, "text-2xl text-gray-900")}>
      funroad
       </span>
      </Link>
      <div className="flex gap-x-4 pr-6 items-center  ld:flex">
        {navbarItems.map((item) => (
           <NavbarItems 
            key={item.href}
            href={item.href}
            
            >
              {item.children}
            </NavbarItems>
          
        ))}
      </div>
      </nav>
    );
};
