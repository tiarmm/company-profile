"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="container mx-auto border-b-4 fixed z-10 bg-white border-orange-500 w-full">
        <div className="flex items-center justify-between">
          <Image
            src="https://drive.google.com/uc?export=view&id=1w7Fh7D2I5XC6GBwrskfVYzp-YCVW86Ct"
            alt=""
            width={130}
            height={100}
          />
          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/about")}>About Us</h3>
              <h3 onClick={() => router.push("/products")}>Our Services</h3>
              <h3 onClick={() => router.push("/teams")}>Our Teams</h3>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/")}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/about")}>About Us</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/products")}>Our Services</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("teams")}>Our Teams</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;