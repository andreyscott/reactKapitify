import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Kapitify from "../../assets/images/logo.jpg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 59px;
  height: 39px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
  text-decoration: none !important;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
    <Link to='/'>
    <LogoImg>
        <img src={Kapitify} alt="Greenland logo" />
      </LogoImg>
    </Link>
      <LogoText>The Best</LogoText>
    </LogoWrapper>
  );
}
