"use client";

import React, { useState } from "react";
import { Menu, X, Loader2 } from "lucide-react";
import Button from "./Button";
import Logo from "../assets/logo";
import useAccountStore from "../store/store";

const Navbar = () => {
  const { user, loading } = useAccountStore();
  const [menuOpen, setMenuOpen] = useState(false); // State to control the burger menu

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white py-4 md:px-8 px-4 sticky top-0 w-full z-[99999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:scale-100 scale-85">
          <Logo className="flex items-center gap-3" />
        </div>

        {/* Burger Icon */}
        <div className="block md:hidden">
          {/* If menu is open, show the X icon, else show the Menu */}
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Buttons for desktop */}
        <div className="hidden md:flex space-x-4">
          {loading ? (
            <Loader2 className="animate-spin text-primary" />
          ) : !user ? (
            <>
              <Button name="Login" variant="secondary" href="/login" />
              <Button name="Get started" variant="primary" href="/register" />
            </>
          ) : (
            <>
              <Button name="Campaigns" variant="secondary" href="/campaigns" />
              <Button name="Profile" variant="primary" href="/profile" />
            </>
          )}
        </div>
      </div>

      {/* Animated Burger Menu (Mobile Only) */}
      <div
        className={`${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 ease-in-out overflow-hidden md:hidden`}
      >
        <div className="flex flex-col space-y-4 mt-4">
          {loading ? (
            <Loader2 className="animate-spin text-primary mx-auto" />
          ) : !user ? (
            <div className="flex space-x-2 mt-5">
              <Button name="Login" variant="secondary" href="/login" />
              <Button name="Get started" variant="primary" href="/register" />
            </div>
          ) : (
            <div className="flex space-x-2 mt-5">
              <Button name="Campaigns" variant="secondary" href="/campaigns" />
              <Button name="Profile" variant="primary" href="/profile" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
