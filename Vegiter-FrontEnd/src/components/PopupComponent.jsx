import React from "react";
import styled from "styled-components";

const PopUp = ({ text }) => {
  let gradient;

  switch (text) {
    case "PASS":
      gradient = "linear-gradient(96deg, #FF000F 0%, #DD00C7 100.88%)";
      break;
    case "LIKE":
      gradient = "linear-gradient(180deg, #b2f584 0%, #8ff2a0 100%)";
      break;
    case "MATCH":
      gradient = "linear-gradient(90deg, #FFD700 0%, #FF8C00 100%)";
      break;
    default:
      gradient = "transparent";
  }

  return (
    <SLayout $gradient={gradient}>
      <p>{text}</p>
    </SLayout>
  );
};

export default PopUp;

const SLayout = styled.div`
  width: 194px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid;
  border-image: ${(props) => props.$gradient} 1;
  transform: rotate(-19.704deg);
  position: absolute;
  top: 50%;
  left: 40%;
  z-index: 80;

  p {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    background: ${(props) => props.$gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;