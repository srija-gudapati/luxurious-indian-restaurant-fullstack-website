import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Crown, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-800/95 backdrop-blur-sm border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Crown className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-ivory-50 group-hover:text-gold-400 transition-colors">
                Maharaja Palace
              </span>
              <span className="text-xs text-gold-500 font-medium tracking-wider">
                AUTHENTIC INDIAN CUISINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold-400 relative ${
                  isActivePath(item.path)
                    ? 'text-gold-500'
                    : 'text-ivory-100 hover:text-gold-400'
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-ivory-100 hover:text-gold-400 transition-colors group"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-maroon-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold group-hover:bg-maroon-600 transition-colors">
                  {state.totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-ivory-100 hover:text-gold-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActivePath(item.path)
                      ? 'text-gold-500 bg-gold-500/10'
                      : 'text-ivory-100 hover:text-gold-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;