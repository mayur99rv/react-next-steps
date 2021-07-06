import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> 1.About Me</Link>
        </li>
        <li>
          <Link to="/work"> 2.Our Work</Link>
        </li>
        <li>
          <Link to="/contact"> 3.Contact Me</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;

    list-style: none;
    /* justify-content: space-around; */
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
