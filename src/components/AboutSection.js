import React from "react";
//Images
import homeImg1 from "../img/home1.png";
//Styled
// eslint-disable-next-line
import styled from "styled-components";
import { About, Description, Hide, Image } from "../pages/styles";

import { motion } from "framer-motion";
import { titleAnim, photoAnim } from "../animate/animation";

import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
