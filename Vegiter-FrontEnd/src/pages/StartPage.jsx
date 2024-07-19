import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background.svg";
import Button from "../components/Button";

const StartPage = () => {
  const navigate = useNavigate();
  const handleLoginChange = () => {
    navigate("/login");
  };
  const handleSignUpChange = () => {
    navigate("/signup");
  };

  return (
    <SLayout>
      <SBubble1 />
      <SBubble2 />
      <SBubble3 />
      <SBubble4 />
      <BackgroundImage />
      <GradientOverlay />
      <Content>
        <TopContent>
          <SDescription>
            <p>식탁 위에서 시작되는 소중한 만남</p>
          </SDescription>
          <STitle>
            <p>Vegiter</p>
          </STitle>
        </TopContent>
        <ButtonWrapper>
          <Button
            btnInfo={{
              text: "로그인",
              color: "white",
              onClick: handleLoginChange,
            }}
          />
          <Button
            btnInfo={{
              text: "회원가입",
              color: "black",
              onClick: handleSignUpChange,
            }}
          />
        </ButtonWrapper>
      </Content>
    </SLayout>
  );
};

export default StartPage;

const SLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 610px;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  z-index: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 610px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(51, 51, 51, 0) 0%,
    rgba(23, 23, 23, 0.54) 28.4%,
    #000 100%
  );
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const TopContent = styled.div`
  margin-top: -120px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

const SDescription = styled.div`
  width: 100%;

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: white;
  }
`;

const STitle = styled.div`
  width: 100%;
  margin-top: -40px;
  margin-bottom: 80px;

  p {
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    background: var(--green-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const SBubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(49deg, rgba(151, 151, 151, 0) 14%, #979797 82.5%);
  opacity: 0.4;
  z-index: 90;
`;

const SBubble1 = styled(SBubble)`
  width: 122px;
  height: 122px;
  position: absolute;
  top: 20px;
  right: 10px;
`;
const SBubble2 = styled(SBubble)`
  width: 100px;
  height: 100px;
  position: absolute;
  left: -10px;
  top: 150px;
`;
const SBubble3 = styled(SBubble)`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 250px;
  right: -10px;
`;
const SBubble4 = styled(SBubble)`
  position: absolute;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 300px;
  left: 80px;
`;