import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import SignupModel from "../models/SignupModel";
import { setSignupData } from "../services/SignupService";

const veganOptions = [
  { label: "비건", value: 1 },
  { label: "락토", value: 2 },
  { label: "오보", value: 3 },
  { label: "락토-오보", value: 4 },
  { label: "페스코", value: 5 },
  { label: "폴로", value: 6 },
  { label: "채식 지향", value: 7 },
];

const SignUpPage = () => {
  const navigate = useNavigate();

  const [birthdate, setBirthdate] = useState("");
  const [signup, setSignup] = useState(new SignupModel());

  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ signup });
  };

  const onChangeBirthdate = (e) => {
    const { value } = e.target;
    setBirthdate(value);
    const age = new Date().getFullYear() - new Date(value).getFullYear();
    setSignup((prev) => ({
      ...prev,
      age: age,
    }));
    console.log({ signup });
  };

  const onChangeHobby = (e) => {
    const { value } = e.target;
    setSignup((prev) => ({
      ...prev,
      hobby: prev.hobby.includes(value)
        ? prev.hobby.filter((hobby) => hobby !== value)
        : [...prev.hobby, value],
    }));
    console.log({ signup });
  };

  const onChangeVegan = (e) => {
    const { value } = e.target;
    setSignup((prev) => ({
      ...prev,
      veganState: parseInt(value, 10),
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setSignupData(signup);
    navigate("/location");
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>회원가입</STitle>
        <SForm onSubmit={handleNext}>
          <SContentContainer>
            <SLabel>
              <h2>아이디</h2>
            </SLabel>
            <SInput
              type="text"
              value={signup.userId}
              name="userId"
              onChange={onChangeSignup}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>비밀번호</h2>
            </SLabel>
            <SInput
              type="password"
              value={signup.password}
              name="password"
              onChange={onChangeSignup}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>생년월일</h2>
            </SLabel>
            <SInput
              type="date"
              value={birthdate}
              name="birthdate"
              onChange={onChangeBirthdate}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>나의 성별</h2>
            </SLabel>
            <SRadioContainer>
              {["여성", "남성", "선택 안함"].map((gender) => (
                <SRadioLabel
                  key={gender}
                  className={signup.gender === gender ? "active" : ""}
                >
                  <SRadio
                    type="radio"
                    value={gender}
                    name="gender"
                    checked={signup.gender === gender}
                    onChange={onChangeSignup}
                  />
                  {gender}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>선호하는 성별</h2>
            </SLabel>
            <SRadioContainer>
              {["여성", "남성", "선택 안함"].map((partnerGender) => (
                <SRadioLabel
                  key={partnerGender}
                  className={
                    signup.partnerGender === partnerGender ? "active" : ""
                  }
                >
                  <SRadio
                    type="radio"
                    value={partnerGender}
                    name="partnerGender"
                    checked={signup.partnerGender === partnerGender}
                    onChange={onChangeSignup}
                  />
                  {partnerGender}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>

          <SContentContainer>
            <SLabel>
              <h2>About me</h2>
              <p>당신은 어떤 타입인가요?</p>
            </SLabel>
            <SRadioContainer>
              {veganOptions.map((option) => (
                <SRadioLabel
                  key={option.value}
                  className={signup.veganState === option.value ? "active" : ""}
                >
                  <SRadio
                    type="radio"
                    value={option.value}
                    name="veganState"
                    checked={signup.veganState === option.value}
                    onChange={onChangeVegan}
                  />
                  {option.label}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <p>취미/관심사는 무엇인가요?</p>
            </SLabel>
            <SCheckboxContainer>
              {[
                "강아지",
                "스키",
                "연결",
                "환경",
                "디자인",
                "글쓰기",
                "음악",
                "영화",
              ].map((hobby) => (
                <SCheckboxLabel
                  key={hobby}
                  className={signup.hobby.includes(hobby) ? "active" : ""}
                >
                  <SCheckbox
                    type="checkbox"
                    value={hobby}
                    checked={signup.hobby.includes(hobby)}
                    onChange={onChangeHobby}
                    style={{ fontSize: "12px" }}
                  />
                  {hobby}
                </SCheckboxLabel>
              ))}
            </SCheckboxContainer>
          </SContentContainer>
          <SButtonContainer>
            <Button
              btnInfo={{
                text: "다음 단계",
                color: "black"
              }}
              type="submit"
            />
          </SButtonContainer>
        </SForm>
      </SContainer>
    </SLayout>
  );
};

export default SignUpPage;

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 610px;
  overflow: hidden;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  height: 610px;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const STitle = styled.h2`
  background: var(--green-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: flex-start;
  margin: 0px;
`;

const SLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  p {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const SInput = styled.input`
  width: 325px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-color: black;
  color: #fff;
  font-size: 13px;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1) grayscale(1) brightness(0.5);
  }
`;

const SRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const SRadioLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 28px;
  background-color: black;
  padding-top: 3px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background: var(--green-gradient);
    color: #000;
  }
`;

const SRadio = styled.input`
  display: none;
`;

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const SCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SCheckboxLabel = styled.label`
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 28px;
  padding-top: 3px;
  background-color: black;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background: var(--green-gradient);
    color: #000;
  }
`;

const SCheckbox = styled.input`
  display: none;
  font-size: 13px;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;