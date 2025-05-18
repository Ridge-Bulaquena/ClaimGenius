
import React from 'react';
import { BrainCircuit, Edit3, LayoutDashboard, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit size={48} className="text-sky-500 mb-4" />,
    title: 'Predictive Denial Prevention',
    description: 'Our AI analyzes claims against millions of data points to predict and flag potential denials before they happen, significantly increasing your first-pass acceptance rate.',
    points: [
        "AI-powered risk scoring",
        "Real-time issue alerts",
        "Payer-specific rule engine"
    ]
  },
  {
    icon: <Edit3 size={48} className="text-emerald-500 mb-4" />,
    title: 'Automated Error Correction',
    description: 'ClaimGenius automatically corrects common coding and demographic errors, reducing manual rework and accelerating the submission process.',
    points: [
        "Intelligent data validation",
        "Automated CPT/ICD code suggestions",
        "Reduced manual intervention"
    ]
  },
  {
    icon: <LayoutDashboard size={48} className="text-amber-500 mb-4" />,
    title: 'Real-time Revenue Cycle Dashboard',
    description: 'Gain complete visibility into your financial performance with customizable dashboards. Track KPIs, identify bottlenecks, and make data-driven decisions.',
    points: [
        "Customizable KPI tracking",
        "Bottleneck identification",
        "Comprehensive financial reporting"
    ]
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-sky-600">ClaimGenius</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We empower your practice with intelligent tools designed to maximize efficiency and revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="flex justify-center md:justify-start">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-2 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-center text-gray-700">
                        <CheckCircle size={18} className="text-emerald-500 mr-2 flex-shrink-0" />
                        {point}
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
