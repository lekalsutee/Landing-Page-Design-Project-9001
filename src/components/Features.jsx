import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiClock, FiAward } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.'
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with military-grade encryption.'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytics & Insights',
      description: 'Get detailed analytics and actionable insights to make data-driven decisions and grow your business.'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Seamlessly collaborate with your team members across different departments and locations.'
    },
    {
      icon: FiClock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you whenever you need assistance or have questions.'
    },
    {
      icon: FiAward,
      title: 'Award Winning',
      description: 'Recognized by industry leaders and awarded for excellence in innovation and customer satisfaction.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in one comprehensive platform. Built for scale, designed for simplicity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;