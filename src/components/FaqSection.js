import React from "react";

import { About } from "../pages/styles";
import styled from "styled-components";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = (props) => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, tenetur.
            </p>
          </div>
        </Toggle>
        <Toggle title="Where Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, tenetur.
            </p>
          </div>
        </Toggle>
        <Toggle title="Why Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, tenetur.
            </p>
          </div>
        </Toggle>
        <Toggle title="Lets Start, finally!">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, tenetur.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding: 3rem 0;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;
