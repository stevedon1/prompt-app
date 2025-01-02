import React from 'react'
export default function Navbar() {
  return (
    <nav className="p-4 w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Title */}
        <h1 className="text-2xl font-bold text-indigo-600">WikiPrompts</h1>

        {/* Placeholder for Links or Menu */}
        <p className="text-gray-500 text-sm">Your tagline here</p>
      </div>
    </nav>
  );
}
