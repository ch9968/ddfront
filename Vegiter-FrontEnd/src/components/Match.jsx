import React, { useState, useEffect } from "react";
import styled from "styled-components";
import client from "../api/client";
import { useParams } from "react-router-dom";

let headers = {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

function Match() {
  const { userId } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await client.post("/matchs", { userId }, headers);
        setMatches(response.data);
      } catch (error) {
        console.error("오류납니다:", error);
      }
    };

    fetchMatches();
  }, [userId]);

  return (
    <SLayout>
      <SContainer>
        {matches.length == 0 ? (
          <NoMatches>현재 매치된 유저가 없습니다.</NoMatches>
        ) : (
          // matches.map((match, index) => (
            <SMatchContainer key={1}>
              <SImageWrapper>
                <SImage src={matches[0].imageLink} alt="Match" />
              </SImageWrapper>
              <STextContainer>
                <h4>{matches[0].nickname}님과 매치되었어요!</h4>
                <p>{matches[0].matchedTime}</p>
              </STextContainer>
            </SMatchContainer>
          // ))
          )
        // )}
        }
      </SContainer>
      <SPlanContainer>
        <SAvocadoWrapper>🥑</SAvocadoWrapper>

        <SAvocadoTextContainer>
          <h4>Super Vegiter Plan (월 0,000원)</h4>
          <p>
            플랜을 업그레이드하고 나에게
            <br /> LIKE를 누른 유저들을 확인해 보세요!
          </p>
        </SAvocadoTextContainer>
      </SPlanContainer>
    </SLayout>
  );
}

export default Match;

const SLayout = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  width: 344px;
  height: 540px;
  border-radius: 30px;
  background-color: #212a39;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: auto;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  gap: 20px;
  width: 100%;
`;

const SImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 50px;
  height: 50px;
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #fff;
  }
  p {
    margin: 0;
    color: #d9d9d9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const SMatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
`;

const SPlanContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  bottom: 162px;
  background: linear-gradient(90deg, #e2fa76 0%, #8ff2a0 100%);
  width: 329px;
  height: 102px;
  border-radius: 20px;
`;

const SAvocadoWrapper = styled.div`
  margin-left: 10px;
  font-size: 60px;
`;
const SAvocadoTextContainer = styled.div`
  margin-left: -10px;
  h4 {
    margin: 0px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: #000;
  }
  p {
    margin: 0px;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: #000;
    white-space: pre-line;
  }
`;

const NoMatches = styled.div`
  color: #d9d9d9;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;