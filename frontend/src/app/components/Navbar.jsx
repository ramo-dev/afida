import React from 'react';
import Button from './Button';
import Logo from "../assets/logo"
const Navbar = () => {
  return (
    <nav className="text-white py-4 px-8 sticky top-0 w-full z-[99999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center space-x-2">
          {/* Replace the span with your logo image */}
          <Logo className="flex items-center gap-3" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 bg-neutral-800 bg-opacity-80 px-4 py-2 rounded-full">
          <a href="#home" className="text-white hover:text-purple transition-colors duration-300">Home</a>
          <a href="#tokens" className="text-white hover:text-purple transition-colors duration-300">Tokens</a>
          <a href="#app" className="text-white hover:text-purple transition-colors duration-300">App</a>
          <a href="#discover" className="text-white hover: text-purple transition-colors duration-300">Discover</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 w-max">
          <Button name="login" variant="secondary" href="/login" />
          <Button name="Get started" variant="primary" href="/onboard" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
