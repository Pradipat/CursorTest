'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const CustomDropdown = ({ options, value, onChange, placeholder }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 bg-gray-800 text-white px-6 py-3 rounded-xl border border-gray-700 
        focus:border-purple-500 focus:outline-none hover:bg-gray-750 transition-all duration-300 
        shadow-lg hover:shadow-purple-500/20 flex items-center justify-between"
      >
        <span className="text-gray-300">{value || placeholder}</span>
        <svg
          className={`w-5 h-5 stroke-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 w-full mt-2 bg-gray-800 rounded-xl border border-gray-700 shadow-xl overflow-hidden"
        >
          {options.map((option: Option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-6 py-3 cursor-pointer transition-all duration-200 
              hover:bg-purple-600 text-gray-300 hover:text-white border-b border-gray-700 last:border-none
              flex items-center justify-between group"
            >
              {option.label}
              {value === option.value && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 stroke-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"/>
                </motion.svg>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function Games() {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const games = [
    {
      id: 1,
      title: "Cyber Warriors",
      category: "Action",
      image: "/game1.jpg",
      description: "An action-packed cyberpunk adventure",
      price: "$59.99",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Fantasy Quest",
      category: "RPG",
      image: "/game2.jpg",
      description: "Epic RPG in a magical realm",
      price: "$49.99",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Space Explorer",
      category: "Adventure",
      image: "/game3.jpg",
      description: "Explore the vast universe",
      price: "$39.99",
      rating: 4.7,
    },
    // Add more games here
  ];

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'Action', label: 'Action' },
    { value: 'RPG', label: 'RPG' },
    { value: 'Adventure', label: 'Adventure' },
  ];

  const priceOptions = [
    { value: '', label: 'Price Range' },
    { value: '0-20', label: 'Under $20' },
    { value: '20-40', label: '$20 - $40' },
    { value: '40+', label: '$40+' },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Our Games Collection
        </motion.h1>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-wrap gap-4"
        >
          <CustomDropdown
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            placeholder="All Categories"
          />
          
          <CustomDropdown
            options={priceOptions}
            value={priceRange}
            onChange={setPriceRange}
            placeholder="Price Range"
          />
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <span className="text-purple-400 font-semibold">{game.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                    {game.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 