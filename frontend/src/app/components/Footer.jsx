
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-white text-center py-10">
      <p className="text-lg font-semibold">Afida</p>
      <p className="text-sm">
        &copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
}

