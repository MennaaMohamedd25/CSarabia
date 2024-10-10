import React from 'react';
import Header from '../Components/Header.jsx';
import Us from '../Components/Us';
import Slider from '../Components/Slider';
import OurNumbers from '../Components/OurNumbers.jsx';
import OurCategory from '../Components/OurCategory.jsx';
import Publication from '../Components/Publication.jsx';
import Atom from '../Components/Atom.jsx';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <>
      <Header />

      {/* Us Section with continuous scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  
        variants={fadeInVariants}
      >
        <Us />
      </motion.div>

      {/* Slider Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  
        variants={fadeInVariants}
      >
        <Slider />
      </motion.div>

      {/* Our Numbers Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <OurNumbers />
      </motion.div>

      {/* Our Category Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <OurCategory />
      </motion.div>

      {/* Atom Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <Atom />
      </motion.div>

      {/* Publication Section */}
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

export default Home;
