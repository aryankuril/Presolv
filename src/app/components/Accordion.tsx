import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  isFAQ?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, className = '', isFAQ = false }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {items.map((item, idx) => (
        <div 
          className={`faq-style ${isFAQ ? 'border-t border-gray-700 pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0' : ''}`} 
          key={item.title}
        >
          <button
            className='faq-title flex items-center justify-between w-full text-left focus:outline-none'
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-expanded={openIndex === idx}
          >
            <h5 className="faq-title m-0">{item.title}</h5>
            {openIndex === idx ? (
              // Minus icon
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="9" width="12" height="2" rx="1" fill="#FBB04C"/>
              </svg>
            ) : (
              // Plus icon
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="4" width="2" height="12" rx="1" fill="#FBB04C"/>
                <rect x="4" y="9" width="12" height="2" rx="1" fill="#FBB04C"/>
              </svg>
            )}
          </button>
          <div
            className={`faq-description transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
          >
            {openIndex === idx && (
              <p>{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 