
import React, { useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center text-sky-600 hover:text-sky-700 transition-colors duration-300 ease-in-out">
              <BarChart3 size={28} className="mr-2" />
              <span className="font-bold text-2xl">ClaimGenius</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Contact</a>
            <Button variant="outline" className="text-sky-600 border-sky-600 hover:bg-sky-50 hover:text-sky-700 transition-all duration-300 ease-in-out transform hover:scale-105">Log In</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105">Request Demo</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-sky-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-all duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-700 hover:bg-sky-50 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out">Features</a>
            <a href="#pricing" className="text-gray-700 hover:bg-sky-50 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:bg-sky-50 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
                <Button variant="outline" className="w-full text-sky-600 border-sky-600 hover:bg-sky-50 hover:text-sky-700 mb-2 transition-all duration-300 ease-in-out transform hover:scale-105">Log In</Button>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105">Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
