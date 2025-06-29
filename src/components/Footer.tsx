import React from 'react';
import { Crown, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Crown className="h-8 w-8 text-gold-500" />
              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50">
                  Maharaja Palace
                </h3>
                <p className="text-xs text-gold-500 font-medium tracking-wider">
                  AUTHENTIC INDIAN CUISINE
                </p>
              </div>
            </div>
            <p className="text-ivory-200 text-sm leading-relaxed">
              Experience the finest Indian cuisine in an elegant setting. Our master chefs 
              bring authentic flavors and royal hospitality to create unforgettable dining experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-500">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Reservations', path: '/reservations' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-ivory-200 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-500">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-ivory-200 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-ivory-200 text-sm">info@maharajapalace.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-ivory-200 text-sm">
                  123 Royal Street<br />
                  Downtown, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-500">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gold-500" />
                <div className="text-sm">
                  <p className="text-ivory-200">Mon - Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-ivory-200">Fri - Sat: 5:00 PM - 11:00 PM</p>
                  <p className="text-ivory-200">Sun: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/20 mt-12 pt-8 text-center">
          <p className="text-ivory-300 text-sm">
            © 2024 Maharaja Palace. All rights reserved. | Crafted with passion for authentic Indian cuisine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;