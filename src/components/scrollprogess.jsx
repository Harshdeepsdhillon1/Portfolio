import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,  // Expands left & right as you scroll
        transformOrigin: "center", // Ensures it grows from the middle
      }}
    />
  );
};

export default ScrollProgress;
