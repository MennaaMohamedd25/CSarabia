import React from 'react';
import ApprochHeader from '../Components/ApprochHeader';
import ApprochMain from '../Components/ApprochMain';
import ApprochText from '../Components/ApprochText';
import ApprochSection from '../Components/ApproachSection';
import ApprochDetails from '../Components/ApproachDetails';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const Approach = () => {
  return (
    <>
      {/* ApprochHeader with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers when 20% of the section is visible
        variants={fadeInVariants}
      >
        <ApprochHeader />
      </motion.div>

      {/* ApprochMain with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ApprochMain />
      </motion.div>

      {/* ApprochText with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ApprochText />
      </motion.div>

      {/* ApprochSection with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ApprochSection />
      </motion.div>

      {/* ApprochDetails with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ApprochDetails />
      </motion.div>
    </>
  );
};

export default Approach;
