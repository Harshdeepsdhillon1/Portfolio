import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        background: "#4E31AA",
        height: "4px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollProgress;
