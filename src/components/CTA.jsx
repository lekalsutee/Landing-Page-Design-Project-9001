import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiMail } = FiIcons;

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that have already revolutionized their operations with our platform. 
            Start your free trial today and experience the difference.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-semibold">
              Start Free Trial
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              <SafeIcon icon={FiMail} className="mr-2 w-5 h-5" />
              Contact Sales
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-blue-100"
          >
            <p className="text-sm">
              ✨ No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;