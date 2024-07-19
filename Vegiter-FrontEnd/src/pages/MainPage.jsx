import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SwipeButtons from "../components/SwipeButtons";
import styled from "styled-components";
import {getPerson, getAction, updatePerson, updateAction, getMatchPopup, setMatchPopup} from "../services/PersonService";
import PopUp from "../components/PopupComponent";
import { useNavigate } from "react-router-dom";

let popup = false;

const MainPage = () => {
  const [currentPerson, setCurrentPerson] = useState(getPerson);
  const [action, setAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const initialize = async () => {
    const response = await getPerson();
    setCurrentPerson(response);
  };

  const handleChange = () => {
    if (popup) {
      setShowModal(true);
      setTimeout(() => {
        const response = updatePerson();
        setCurrentPerson(response);
        popup = false;
      }, 1500);
    } else {
      const response = updatePerson();
      setCurrentPerson(response);
    }
  }

  const checkPerson = async () => {
    const response = await getPerson();
    if (response) {
      setShowContent(true);
    }
  }

  const checkNextPerson = () => {
    const response = updatePerson();
  }

  useEffect(() => {
    initialize();
    checkPerson();
  }, [])

  useEffect(() => {
    checkNextPerson();
  }, [currentPerson]);

  // Removed the Header Component and added a memberId attribute to swipeButtons.
  return (
    <MainCont>
      {showContent &&
        <>
          <Cards currentPerson={currentPerson} />
          <SwipeButtons memberId={1} onChange={handleChange} />
          {popup &&
            <PopUp text="MATCH" />
          }
        </>
      }
    </MainCont>
  );
};

const MainCont = styled.div`
  display: block;
`;

export function setPopup(pop) {
  popup = pop;
}

export default MainPage;
