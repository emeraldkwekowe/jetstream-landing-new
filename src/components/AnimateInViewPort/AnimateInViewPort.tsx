import { motion } from "framer-motion";

function AnimateInViewPort({
  children,
  duration = 0.4,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.section
      data-testid="animate-in-viewport-div"
      initial={{ opacity: 0, transform: "translate3d(0, 13%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.section>
  );
}

export default AnimateInViewPort;
