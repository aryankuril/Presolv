import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <Image src="/images/linkedin.svg" alt="LinkedIn" width={30} height={35} />
        
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <Image src="/images/instagram.svg" alt="Instagram" width={30} height={35} />
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <Image src="/images/youtube.svg" alt="YouTube" width={40} height={42} />  
      )
    }
  ];

  const quickLinks = [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/faq', label: 'FAQ' }
  ];

  return (
    <footer className="relative mt-40 border-t-1 border-[#3B3B3B]" style={{ letterSpacing: '0px' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-image.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(179deg, #0A0A0A 15.31%, rgba(24, 24, 24, 0.80) 99.51%)' }}></div>
      </div>
      
      {/* Footer Content */}
      <div className="relative py-12 px-5 md:px-20 lg:px-[82px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-[#FBB04C] text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="text-white flex items-start gap-3">
                  <Image src="/images/location.svg" alt="Location" width={30} height={35} className='color-white' />
                  <h6 className="text-white">Presolv360, Esperanca Building, Colaba, Mumbai - 400001</h6>
                </li>
                <li className="text-white flex items-center gap-3">
                  <Image src="/images/email.svg" alt="Email" width={30} height={35} />
                  <h6 className="text-white">trainings@presolv360.com</h6>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-[#FBB04C] text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-white hover:text-[#FBB04C] transition-colors"
                    >
                      <h6>{link.label}</h6>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-[#FBB04C] text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    className="text-white hover:text-[#FBB04C] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className='mt-12'>
            <h4 className='text-[#FBB04C] text-lg font-semibold mb-4'>Disclaimer</h4>
            <h6 className='text-white'>
              Presolv360 is not a law firm and does not provide legal advice. The use of any materials or service is not a substitute for legal advice. Only a legal practitioner can provide legal advice. A legal practitioner should be consulted for any legal advice or matter. No Attorney-Client relationship is created by use of these materials or services.
            </h6>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <h6 className="text-white text-center">
              © {currentYear} Presolv360. All rights reserved.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
} 