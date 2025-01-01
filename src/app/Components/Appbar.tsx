"use client";

import React, { ReactNode } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Link,
  Image,
} from "@nextui-org/react";
import DropdownMenu from "./DropdownMenu";

interface Props {
  children: ReactNode;
  isAuthenticated: boolean; // Add this prop
}

export default function Appbar({ children, isAuthenticated }: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="shadow-lg bg-black bg-opacity-75 p-4"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center text-primary-400 hover:text-primary-800 transition-colors gap-2"
          >
            <Image
              src={`/logo.png`}
              alt="ZYCK_Property"
              width={150}
              height={90}
              className="order-1 md:order-none"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Navigation */}
      <NavbarContent justify="center">
        <DropdownMenu isAuthenticated={isAuthenticated} />
      </NavbarContent>

      {/* End Navigation */}
      <NavbarContent justify="end">{children}</NavbarContent>
    </Navbar>
  );
}
