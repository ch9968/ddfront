import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import StartPage from "./pages/StartPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostingPage from "./pages/PostingPage";
import StatusBarComponent from "./components/StatusBar";
import SwipePage from "./pages/SwipePage";
import LocationSelector from "./pages/LocationSelector";

const App = () => {
  function getCurrentUserId() {}

  return (
    <AppCont>
      <StatusBarComponent></StatusBarComponent>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostingPage />} />
        <Route path="/location" element={<LocationSelector />} />
        <Route path="/swipe/*" element={<SwipePage />} />
      </Routes>
    </AppCont>
  );
};

const AppCont = styled.div`
  position: relative;
  width: 375px;
  height: 664px;
  margin: 0 auto;
  background-color: var(--black);
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.4);
`;

export default App;
