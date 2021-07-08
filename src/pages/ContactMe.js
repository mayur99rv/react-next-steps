import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animate/animation";

const ContactMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 style={{ color: "white", textAlign: "center" }}>hello</h1>
    </motion.div>
  );
};

export default ContactMe;
