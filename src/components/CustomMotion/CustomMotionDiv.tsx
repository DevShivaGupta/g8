import { motion, HTMLMotionProps } from "framer-motion";

interface CustomMotionDivProps extends HTMLMotionProps<"div"> {
  initial: any;
  animate: any;
  transition: any;
  // any other thing
}

const CustomMotionDiv = (props: CustomMotionDivProps) => {
  return (
    <motion.div
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
    >
      {props.children}
    </motion.div>
  );
};

export default CustomMotionDiv;
