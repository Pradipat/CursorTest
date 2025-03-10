'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "./components/PageWrapper";

const staggerChildren = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, margin: "-100px" },
  variants: {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
};

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-gray-900 text-white opacity-0 animate-fadeIn">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[calc(100vh-64px)] flex items-center justify-center"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-6xl leading-normal font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Epic Gaming Adventures
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Discover amazing games and join our gaming community. Experience the next level of entertainment.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
            >
              Explore Games
            </motion.button>
          </div>
        </motion.section>

        {/* Featured Games Section */}
        <motion.section 
          {...staggerChildren}
          className="py-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Featured Games
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Game Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  scale: {
                    type: "tween",
                    duration: 0.1,
                    ease: "easeIn"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "tween",
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src="/game1.jpg"
                    alt="Game 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cyber Warriors</h3>
                  <p className="text-gray-400">An action-packed cyberpunk adventure</p>
                </div>
              </motion.div>

              {/* Game Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4,
                  scale: {
                    type: "tween",
                    duration: 0.1,
                    ease: "easeIn"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "tween",
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src="/game2.jpg"
                    alt="Game 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fantasy Quest</h3>
                  <p className="text-gray-400">Epic RPG in a magical realm</p>
                </div>
              </motion.div>

              {/* Game Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  scale: {
                    type: "tween",
                    duration: 0.1,
                    ease: "easeIn"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "tween",
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src="/game3.jpg"
                    alt="Game 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Space Explorer</h3>
                  <p className="text-gray-400">Explore the vast universe</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          {...staggerChildren}
          className="py-20 px-4 bg-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-gray-300 text-lg mb-6">
                  We are passionate about creating immersive gaming experiences that transport players to extraordinary worlds. Our commitment to quality and innovation drives us to deliver unforgettable adventures.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    High-quality gaming content
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Active community
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Regular updates and events
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px]"
              >
                <Image
                  src="/about-image.jpg"
                  alt="About us"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 py-8 px-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">© 2024 Epic Gaming Adventures. All rights reserved.</p>
          </div>
        </motion.footer>
      </main>
    </PageWrapper>
  );
}
