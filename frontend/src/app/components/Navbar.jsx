"use client"
import React from 'react';
import Button from './Button';
import Logo from "../assets/logo"
import useAccountStore from '../store/store';
import { Loader2 } from 'lucide-react';
const Navbar = () => {
  const { user, loading } = useAccountStore();
  return (
    <nav className="text-white py-4 px-8 sticky top-0 w-full z-[99999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center space-x-2">
          {/* Replace the span with your logo image */}
          <Logo className="flex items-center gap-3" />
        </div>



        {/* Buttons */}

        {loading ?
          <Loader2 className='animate-spin' /> :
          !loading && !user ? <div className="flex space-x-4 w-max">
            <Button name="login" variant="secondary" href="/login" />
            <Button name="Get started" variant="primary" href="/register" />
          </div>
            : <div className="flex space-x-4 w-max">
              <Button name="campaigns" variant="secondary" href="/campaigns" />
              <Button name="Profile" variant="primary" href="/profile" />
            </div>

        }
      </div>
    </nav>
  );
};

export default Navbar;
