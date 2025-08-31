import React from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const locations = [
    { city: 'Portland, ME', hours: 'Daily 3:00 – 10:30' },
    { city: 'Asheville, NC', hours: 'Tue-Sun 3:30 – 10:00' },
    { city: 'Boulder, CO', hours: 'Daily 3:00 – 10:30' },
    { city: 'Nashville, TN', hours: 'Daily 3:00 – 10:30' },
    { city: 'Charleston, SC', hours: 'Tue-Sun 3:30 – 10:00' }
  ];

  const faqs = [
    { question: 'Do you offer reservations?', answer: 'Yes, we highly recommend reserving a table in advance.' },
    { question: 'Do you offer discounts?', answer: 'Yes, we offer discounts for service members, seniors, and veterans.' },
    { question: 'Special dietary needs?', answer: 'We offer dairy-free, gluten-free, vegan, vegetarian, and paleo options.' },
    { question: 'Do you offer takeout?', answer: 'No, we focus on delivering the best dining experience in-house.' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/artwork/pattern-utensils.svg')`,
          backgroundSize: '100px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="/artwork/logo-stacked.svg" 
              alt="The Lakehouse Restaurant" 
              className="h-20 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Fine dining without the conventional stiffness, featuring locally sourced ingredients 
              in a welcoming atmosphere of rustic elegance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-600">Locations</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="font-medium">{location.city}</span>
                  </div>
                  <div className="flex items-center ml-6">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300">{location.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-600">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-gray-300">info@lakehousefood.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-600 mr-3" />
                <span className="text-gray-300">careers@lakehousefood.com</span>
              </div>
            </div>
          </div>

          {/* Quick FAQs */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-600">Quick FAQs</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-white mb-1">{faq.question}</p>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 The Lakehouse Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;