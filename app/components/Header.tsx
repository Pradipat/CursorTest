'use client';

// Header component for the Epic Gaming website
//
// Usage:
// import Header from '@/components/Header';
//
// function YourComponent() {
//   return (
//     <>
//       <Header />
//       {/* Your content */}
//     </>
//   );
// }
//
// Note: This component renders a fixed navigation bar at the top of the page
// with responsive mobile menu support. No props required.

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItemVariants = {
  closed: { opacity: 0, x: -10 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full bg-gray-900 z-50"
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-300">
                Epic Gaming
              </Link>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <motion.div 
                  className="px-2 pt-2 pb-3 space-y-1"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={menuItemVariants}
                    >
                      <Link 
                        href={item.href} 
                        className="block px-3 py-2 text-base font-medium text-white hover:bg-purple-600 rounded-md transition-all duration-300 hover:pl-6"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
      {/* Spacer div to prevent content from hiding under fixed header */}
      <div className="h-16 bg-gray-900" />
    </div>
  );
} 