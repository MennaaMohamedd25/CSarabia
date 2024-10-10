import React from 'react';
import MissionHeader from '../Components/MissionHeader';
import MissionMain from '../Components/MissionMain';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const MissionVision = () => {
  return (
    <>
      {/* MissionHeader with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers when 20% of the section is visible
        variants={fadeInVariants}
      >
        <MissionHeader />
      </motion.div>

      {/* MissionMain with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <MissionMain />
      </motion.div>
    </>
  );
};

export default MissionVision;
