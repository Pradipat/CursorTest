'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Games() {
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
          <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none">
            <option value="">All Categories</option>
            <option value="action">Action</option>
            <option value="rpg">RPG</option>
            <option value="adventure">Adventure</option>
          </select>
          
          <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none">
            <option value="">Price Range</option>
            <option value="0-20">Under $20</option>
            <option value="20-40">$20 - $40</option>
            <option value="40+">$40+</option>
          </select>
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