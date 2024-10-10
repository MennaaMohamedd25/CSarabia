import React from 'react';
import ContactHeader from '../Components/ContactHeader';
import ContactMap from '../Components/ContactMap';
import ContactDetails from '../Components/ContactDetails';
import { motion } from 'framer-motion';

// Define fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },  // Animation when in view
};

const ContactUs = () => {
  return (
    <>
      {/* ContactHeader with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Triggers when 20% of the section is visible
        variants={fadeInVariants}
      >
        <ContactHeader />
      </motion.div>

      {/* ContactMap with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ContactMap />
      </motion.div>

      {/* ContactDetails with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ContactDetails />
      </motion.div>
    </>
  );
};

export default ContactUs;
