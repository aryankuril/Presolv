'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  
  const pricingTiers: PricingTier[] = [
    {
      id: 'essential',
      name: 'Essential',
      description: 'Core ODR training for aspiring mediators',
      price: billingCycle === 'monthly' ? 7999 : 5999,
      duration: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      features: [
        { text: 'ODR Fundamentals Course', included: true },
        { text: 'Basic Platform Training', included: true },
        { text: 'Community Forum Access', included: true },
        { text: 'Monthly Webinars', included: true },
        { text: 'Practice Assessments', included: true },
        { text: 'Mediation Simulations', included: false },
        { text: 'Advanced Negotiation Techniques', included: false },
        { text: 'Specialized ODR Certifications', included: false },
        { text: '1-on-1 Mentorship', included: false },
      ],
      cta: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Comprehensive training for ODR practitioners',
      price: billingCycle === 'monthly' ? 14999 : 11999,
      duration: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      features: [
        { text: 'ODR Fundamentals Course', included: true },
        { text: 'Basic Platform Training', included: true },
        { text: 'Community Forum Access', included: true },
        { text: 'Monthly Webinars', included: true },
        { text: 'Practice Assessments', included: true },
        { text: 'Mediation Simulations', included: true },
        { text: 'Advanced Negotiation Techniques', included: true },
        { text: 'Specialized ODR Certifications', included: false },
        { text: '1-on-1 Mentorship', included: false },
      ],
      cta: 'Upgrade Now',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete ODR mastery for organizations',
      price: billingCycle === 'monthly' ? 24999 : 19999,
      duration: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      features: [
        { text: 'ODR Fundamentals Course', included: true },
        { text: 'Basic Platform Training', included: true },
        { text: 'Community Forum Access', included: true },
        { text: 'Monthly Webinars', included: true },
        { text: 'Practice Assessments', included: true },
        { text: 'Mediation Simulations', included: true },
        { text: 'Advanced Negotiation Techniques', included: true },
        { text: 'Specialized ODR Certifications', included: true },
        { text: '1-on-1 Mentorship', included: true },
      ],
      cta: 'Contact Sales'
    }
  ];

  // Format price to include comma for thousands
  const formatPrice = (price: number): string => {
    return '₹' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section id="pricing" className="py-20 bg-[#080816]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium mb-2 block">PRICING PLANS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Invest in Your ODR Future
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your career goals and budget
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-blue-900"
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400 font-medium">(Save 25%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative rounded-2xl overflow-hidden ${
                tier.popular 
                  ? 'bg-gradient-to-b from-blue-900/20 to-purple-900/20 border border-blue-500/20 shadow-lg shadow-blue-500/10' 
                  : 'bg-[#12121E] border border-gray-800'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{formatPrice(tier.price)}</span>
                  <span className="text-gray-400 ml-2">{tier.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included ? 'bg-blue-500' : 'bg-gray-700'
                      }`}>
                        {feature.included ? (
                          <Check className="h-3 w-3 text-white" />
                        ) : (
                          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
                        )}
                      </span>
                      <span className={`ml-3 ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-[#1E1E3A] hover:bg-[#25253F] text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
          <p className="text-gray-400 mb-6">
            Need a custom solution for your organization? We offer tailored training programs for law firms, 
            corporations, and government agencies.
          </p>
          <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 transition-colors px-6 py-3 rounded-lg font-medium">
            Contact our Enterprise Team
          </button>
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-400">
                Not satisfied with our program? We offer a 14-day money-back guarantee for all our plans.
                Try risk-free and see the results for yourself.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <svg className="w-20 h-20 text-blue-500 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 