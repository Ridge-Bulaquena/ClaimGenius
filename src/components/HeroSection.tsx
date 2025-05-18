
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react'; // Icons for benefits

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="block">ClaimGenius:</span>
          <span className="block text-sky-600">Clean Claims, Faster Payments,</span>
          <span className="block text-emerald-500">Happier Practice.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          Our end-to-end claim management system leverages predictive analytics to slash denial rates, automate corrections, and illuminate your revenue cycle.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-sky-600 border-sky-600 hover:bg-sky-50 hover:text-sky-700 px-8 py-3 text-lg">
            Learn More
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <ShieldCheck size={40} className="text-sky-500 mb-3"/>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">Reduce Denials</h3>
                <p className="text-gray-500 text-sm">Proactively identify and fix errors before submission.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Zap size={40} className="text-emerald-500 mb-3"/>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">Automate Corrections</h3>
                <p className="text-gray-500 text-sm">Streamline workflows with intelligent automation.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp size={40} className="text-amber-500 mb-3"/>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">Boost Revenue</h3>
                <p className="text-gray-500 text-sm">Optimize your billing process with real-time insights.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
