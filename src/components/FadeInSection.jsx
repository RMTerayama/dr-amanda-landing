import React from 'react';
import { motion as Motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default FadeInSection;

