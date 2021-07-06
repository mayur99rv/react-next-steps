import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Images
import athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animate/animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <h2>The Athlete</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athelete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="athlete" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    color: #fffff1;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

// frames animations

const Frame1 = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 10%;
  left: 0;
  background-color: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default OurWork;
