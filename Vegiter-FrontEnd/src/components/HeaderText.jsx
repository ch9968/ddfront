import React from "react";
import styled from "styled-components";

const HeaderText = ({ text }) => {
  return (
    <HeaderWrapper>
      <p>{text}</p>
    </HeaderWrapper>
  );
};

export default HeaderText;

const HeaderWrapper = styled.div`
  height: 24px;
  p {
    font-family: AppleSDGothicNeoEB00;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: white;
  }
`;
