"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"

const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);

  return (
    <>
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50")}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active ={active} item="Home">
            
       </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active ={active} item="About us">
            
       </MenuItem>
       <MenuItem setActive={setActive} active ={active} item="Services">
        <div className="flex flex-col space-y-6">
       <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/">Interface Design</HoveredLink>
            <HoveredLink href="/App development">App Development</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
            
       </MenuItem>
        <MenuItem setActive={setActive} active ={active} item="Products">
            
            </MenuItem> <MenuItem setActive={setActive} active ={active} item="Pricing">
            
            </MenuItem>
        </Menu>
        </div>
        </>
  )
}

export default Navbar