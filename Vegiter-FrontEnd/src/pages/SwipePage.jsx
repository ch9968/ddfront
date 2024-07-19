import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MessagePage from "../pages/MessagePage";
import NavComponent from "../components/NavComponent";
import MatchPage from "./MatchPage";
import {getPeople, getPerson} from "../services/PersonService";
import { useEffect, useState } from "react";

const SwipePage = () => {
    const [currentPerson, setCurrentPerson] = useState(getPerson);
    
    const initializeSwipe = async() => {
        const response = await getPeople();
        setCurrentPerson(await getPerson());
    }

    useEffect(() => {
        initializeSwipe();
    }, []);

    function getCurrentUserId() {}
    
    return (
        <>
            <NavComponent></NavComponent>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="main/:userId" element={<MainPage />} />
                <Route path="message" element={<MessagePage />} />
                <Route path="matches/:userId" element={<MatchPage />} />
            </Routes>
        </>
    );
};

export default SwipePage;
  