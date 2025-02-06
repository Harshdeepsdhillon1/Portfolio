// FadeIn.js
import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and a slight downward offset
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
      transition={{ duration: 1, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is visible
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
