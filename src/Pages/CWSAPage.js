import React from 'react';
import CWSAHeader from '../Components/CWSAHeader';
import CWSASection from '../Components/CWSASection';
import CWSASectionTwo from '../Components/CWSASectionTwo';
import CWSAMarket from '../Components/CWSAMarket';
import CWSATech from '../Components/CWSATech';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const CWSAPage = () => {
  return (
    <>
      {/* Apply animation to each section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers animation when 20% of the section is in view
        variants={fadeInVariants}
      >
        <CWSAHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CWSASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CWSASectionTwo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CWSAMarket />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CWSATech />
      </motion.div>
    </>
  );
};

export default CWSAPage;
