'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const pageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.1
    }
  }
};

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.5
    }
  }
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const missionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const missionItem = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team1.jpg",
      bio: "Gaming industry veteran with 15 years of experience",
    },
    {
      name: "Mike Chen",
      role: "Creative Director",
      image: "/team2.jpg",
      bio: "Award-winning game designer and storyteller",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      image: "/team3.jpg",
      bio: "Expert in game engine development and optimization",
    },
  ];

  return (
    <PageWrapper>
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] flex items-center justify-center"
        >
          <motion.div 
            variants={heroItem}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/about-hero.jpg"
              alt="About hero"
              fill
              className="object-cover opacity-40"
            />
          </motion.div>
          <motion.div 
            variants={heroContainer}
            className="relative z-10 text-center px-4"
          >
            <motion.h1 
              variants={heroItem}
              className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Our Story
            </motion.h1>
            <motion.p 
              variants={heroItem}
              className="text-xl max-w-2xl mx-auto text-gray-300"
            >
              Creating immersive gaming experiences since 2010
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          variants={missionContainer}
          className="py-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  variants={missionItem}
                  className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  Our Mission
                </motion.h2>
                <motion.p 
                  variants={missionItem}
                  className="text-gray-300 text-lg mb-6"
                >
                  We believe in the power of gaming to bring people together, inspire creativity, and create unforgettable experiences. Our mission is to develop innovative games that push the boundaries of technology while telling compelling stories that resonate with players worldwide.
                </motion.p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Innovation First",
                      desc: "Pushing the boundaries of what's possible in gaming"
                    },
                    {
                      title: "Player-Centric",
                      desc: "Creating games that players love and want to share"
                    },
                    {
                      title: "Community Driven",
                      desc: "Building strong connections with our player base"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.title}
                      variants={missionItem}
                      custom={index}
                      className="flex items-start"
                    >
                      <span className="text-purple-400 text-2xl mr-4">✦</span>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.98 },
                  show: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                className="relative h-[500px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/mission.jpg"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-400 mb-3">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50M+", label: "Players Worldwide" },
                { value: "20+", label: "Award-Winning Games" },
                { value: "100+", label: "Team Members" },
                { value: "13", label: "Years of Excellence" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 