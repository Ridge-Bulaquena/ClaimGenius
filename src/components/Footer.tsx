
import React from 'react';
import { BarChart3 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <a href="/" className="flex items-center text-white mb-4">
                    <BarChart3 size={24} className="mr-2 text-sky-400" />
                    <span className="font-bold text-xl">ClaimGenius</span>
                </a>
                <p className="text-sm text-slate-400">
                    Clean claims, faster payments, happier practice.
                </p>
            </div>
            <div>
                <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                <ul className="space-y-2">
                    <li><a href="#features" className="hover:text-sky-400 transition-colors">Features</a></li>
                    <li><a href="#pricing" className="hover:text-sky-400 transition-colors">Pricing</a></li>
                    <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <h5 className="text-lg font-semibold text-white mb-4">Contact</h5>
                <p className="text-sm">123 HealthTech Ave, Suite 400</p>
                <p className="text-sm">Wellness City, CA 90210</p>
                <p className="text-sm mt-2">
                    <a href="mailto:info@claimgenius.com" className="hover:text-sky-400 transition-colors">info@claimgenius.com</a>
                </p>
                <p className="text-sm">
                    <a href="tel:+18005551234" className="hover:text-sky-400 transition-colors">+1 (800) 555-1234</a>
                </p>
            </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} ClaimGenius. All rights reserved. Built with Lovable.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
