'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const formControls = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Get in Touch
            </motion.h2>
            <form className="space-y-6">
              <motion.div {...formControls} transition={{ delay: 0.4 }}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div {...formControls} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </motion.div>
              <motion.div {...formControls} transition={{ delay: 0.6 }}>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300">
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="business">Business Inquiry</option>
                  <option value="feedback">Game Feedback</option>
                </select>
              </motion.div>
              <motion.div {...formControls} transition={{ delay: 0.7 }}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Contact Information
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  title: "Our Office",
                  content: (
                    <>
                      123 Gaming Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </>
                  )
                },
                {
                  title: "Contact Details",
                  content: (
                    <>
                      Email: support@epicgaming.com<br />
                      Phone: +1 (555) 123-4567
                    </>
                  )
                },
                {
                  title: "Business Hours",
                  content: (
                    <>
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                      Saturday - Sunday: Closed
                    </>
                  )
                }
              ].map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-400">{info.content}</p>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/office.jpg"
                  alt="Our office"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
} 