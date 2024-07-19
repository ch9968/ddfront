import React from "react";
import styled from "styled-components";
import backIcon from "../assets/icn_back.svg";
import heartIcon from "../assets/icn_heart.svg";
import thumbsIcon from "../assets/icn_thumbs.svg";
import passIcon from "../assets/icn_pass.svg";
import {previousPerson, heartPerson, likePerson, nextPerson, setAction} from "../services/PersonService";
import { setPopup } from "../pages/MainPage";

const SwipeButtons = (data) => {
  function goBack() {
    previousPerson();
    data.onChange();
  }

  async function heart() {
    const response = await heartPerson().then((response) => {
      console.log('Liked: ', response);
      setPopup(response);
      nextPerson();
      data.onChange();
    });
  }

  function like() {
    likePerson();
    nextPerson();
    data.onChange();
  }

  function pass() {
    nextPerson();
    data.onChange();
  }

  return (
    <SLayout>
      <button
        onClick={() => {
          goBack();
        }}
      >
        <img src={backIcon} alt="Back Icon" />
      </button>
      <button
        onClick={() => {
          like();
        }}
      >
        <img src={thumbsIcon} alt="Thumbs Icon" />
      </button>
      <button
        onClick={() => {
          heart();
        }}
      >
        <img src={heartIcon} alt="Heart Icon" />
      </button>
      <button
        onClick={() => {
          pass();
        }}
      >
        <img src={passIcon} alt="Pass Icon" />
      </button>
    </SLayout>
  );
};

export default SwipeButtons;

const SLayout = styled.div`
  height: 136px;
  padding-left: 41px;
  padding-right: 41px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 53px;
    border-radius: 50%;
    margin-top: 32px;
    border: none;
    outline: none;
    background: #374356;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 0px 10px 0px #ffffff;
    }
  }
`;
