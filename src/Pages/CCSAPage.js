import React from 'react';
import CCSAHeader from '../Components/CCSAHeader';
import CCSASection from '../Components/CCSASection';
import CCSASectioTwo from '../Components/CCSASectioTwo';
import CCSASectionThree from '../Components/CCSASectionThree';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const CCSAPage = () => {
  return (
    <>
      {/* Apply animation to each section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers animation when 20% of the section is in view
        variants={fadeInVariants}
      >
        <CCSAHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CCSASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CCSASectioTwo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CCSASectionThree />
      </motion.div>
    </>
  );
};

export default CCSAPage;
