import React from 'react';
import TeamHeader from '../Components/TeamHeader';
import TeamMain from '../Components/TeamMain';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const Team = () => {
  return (
    <>
      {/* TeamHeader with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers when 20% of the section is visible
        variants={fadeInVariants}
      >
        <TeamHeader />
      </motion.div>

      {/* TeamMain with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <TeamMain />
      </motion.div>
    </>
  );
};

export default Team;
