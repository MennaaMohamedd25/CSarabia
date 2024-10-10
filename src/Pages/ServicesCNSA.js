import React from 'react';
import ServicesCNSAHeader from '../Components/ServicesCNSAHeader';
import ServicesCNSAMain from '../Components/ServicesCNSAMain';
import ServicesCNSASection from '../Components/ServicesCNSASection';
import ServicesCNSADetails from '../Components/ServicesCNSADetails';
import ServicesCNSASectionTwo from '../Components/ServicesCNSASectionTwo';
import ServicesCNSAInfo from '../Components/ServicesCNSAInfo';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const ServicesCNSA = () => {
  return (
    <>
      {/* Wrap each section in a motion.div for the scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // Animation triggers when 20% of the section is in view
        variants={fadeInVariants}
      >
        <ServicesCNSAHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ServicesCNSAMain />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ServicesCNSASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ServicesCNSADetails />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ServicesCNSASectionTwo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <ServicesCNSAInfo />
      </motion.div>
    </>
  );
};

export default ServicesCNSA;
