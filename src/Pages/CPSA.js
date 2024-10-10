import React from 'react';
import CPSAHeader from '../Components/CPSAHeader';
import CPSAMain from '../Components/CPSAMain';
import CPSASection from '../Components/CPSASection';
import CPSAMarket from '../Components/CPSAMarket';
import CPSAInfo from '../Components/CPSAInfo';
import CPSAQRA from '../Components/CPSAQRA';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const CPSA = () => {
  return (
    <>
      {/* Apply animation to each section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers animation when 20% of the section is in view
        variants={fadeInVariants}
      >
        <CPSAHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CPSAMain />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CPSASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CPSAMarket />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CPSAInfo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <CPSAQRA />
      </motion.div>
    </>
  );
};

export default CPSA;
