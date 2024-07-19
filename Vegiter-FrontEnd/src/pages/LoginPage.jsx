import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../api/user";
import Button from "../components/Button";
import { getUserId, setUserId } from "../services/PersonService";

const LoginPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({ id: "", pw: "" });

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { id, pw } = login;
    try {
      const response = await postLogin(id, pw);
      setUserId(response.data.userId);
      alert(`로그인 성공! ${response.data.userId}님 환영합니다.`);
      let userId = getUserId();
      navigate(`/swipe/main/${userId}`);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("아이디와 비밀번호가 맞는지 다시 확인해주세요!");
      } else {
        alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>로그인</STitle>
        <SForm onSubmit={handleLoginSubmit}>
          <SContentContainer>
            <SLabel>아이디</SLabel>
            <SInput
              type="text"
              value={login.id}
              name="id"
              onChange={onChangeLogin}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>비밀번호</SLabel>
            <SInput
              type="password"
              value={login.pw}
              name="pw"
              onChange={onChangeLogin}
            />
          </SContentContainer>
          <SButtonContainer>
            <Button
              btnInfo={{
                text: "로그인",
                color: "black",
              }}
              type="submit"
            />
          </SButtonContainer>
        </SForm>
      </SContainer>
    </SLayout>
  );
};

export default LoginPage;

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  max-height: 80vh;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  overflow-y: auto;
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

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;