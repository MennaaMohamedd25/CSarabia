import React from 'react';
import OverviewHeader from '../Components/OverviewHeader.jsx';
import OverviewMain from '../Components/OverviewMain.jsx';
import OverviewText from '../Components/OverviewText.jsx';
import Atom from '../Components/Atom.jsx';
import Publication from '../Components/Publication.jsx';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const CompanyOverView = () => {
  return (
    <>
      {/* OverviewHeader with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Animation triggers when 20% of the section is in view
        variants={fadeInVariants}
      >
        <OverviewHeader />
      </motion.div>

      {/* OverviewMain with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <OverviewMain />
      </motion.div>

      {/* OverviewText with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <OverviewText />
      </motion.div>

      {/* Atom with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <Atom />
      </motion.div>

      {/* Publication with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <Publication />
      </motion.div>
    </>
  );
};

export default CompanyOverView;
