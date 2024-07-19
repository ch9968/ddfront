// src/components/common/Button.js

import React from "react";
import styled from "styled-components";

const Button = ({ btnInfo }) => {
  const { text, color, width, height, onClick } = btnInfo;

  const btnColor = {
    white: ["transparent", "white", "white"],
    black: ["var(--green-gradient)", "var(--black)", "var(--green-gradient)"],
    red: ["transparent", "var(--red)", "var(--red)"],
  };

  return (
    <BtnContainer
      color={btnColor[color]}
      width={width}
      height={height}
      onClick={onClick}
    >
      {text}
    </BtnContainer>
  );
};

export default Button;

const BtnContainer = styled.button`
  width: ${(props) => (props.width ? props.width : "216px")};
  height: ${(props) => (props.height ? props.height : "44px")};
  border-radius: 20px;
  background: ${(props) =>
    props.color ? props.color[0] : "var(--green-gradient)"};
  text-align: center;
  color: ${(props) => (props.color ? props.color[1] : "var(--black)")};
  border: 2px solid
    ${(props) => (props.color ? props.color[2] : "var(--black)")};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
  margin: 10px;
  display: inline-block;
`;
