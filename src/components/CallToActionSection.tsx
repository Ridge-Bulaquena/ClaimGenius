
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-sky-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Revolutionize Your Claim Management?
        </h2>
        <p className="max-w-xl mx-auto text-lg text-sky-100 mb-10">
          Stop letting claim denials eat into your revenue. Discover how ClaimGenius can transform your practice's financial health.
        </p>
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 text-xl shadow-lg hover:shadow-xl transition-shadow">
          Request Your Free Demo
        </Button>
         <p className="mt-6 text-sm text-sky-200">
            Or call us at <a href="tel:+18005551234" className="underline hover:text-white">+1 (800) 555-1234</a> to speak with an expert.
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
