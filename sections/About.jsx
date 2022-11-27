'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>

    {/* Gradient... */}
    <div className='gradient-02 z-0' />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ omce: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

      <TypingText title="| About Metaverses" textStyles="text-center" />

      <motion.p>
        
      </motion.p>

    </motion.div>
  </section>
);

export default About;
