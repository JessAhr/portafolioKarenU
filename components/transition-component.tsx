"use client";
import { fadeIn } from "@/utils/motion-transitions";
import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "bottom" | "right";
  className?: string;
}

const MotionTransition = (props: MotionTransitionProps) => {
  const { children, position, className } = props;

  return (
      <motion.div
        variants={fadeIn(position)}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </motion.div>
    
  );
};

export default MotionTransition;
