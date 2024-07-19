import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { setLocation, setPartnerLocation } from "../services/SignupService";
import { useNavigate } from "react-router-dom";

const LocationSelector = () => {
  const [selectedSido, setSelectedSido] = useState("");
  const [selectedGugun, setSelectedGugun] = useState("");
  const [gugunOptions, setGugunOptions] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [myLocation, setMyLocation] = useState("");
  const [myGugun, setMyGugun] = useState("");
  const areas = {
    서울특별시: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSido) {
      setGugunOptions(areas[selectedSido]);
      setSelectedGugun("");
    } else {
      setGugunOptions([]);
    }
  }, [selectedSido]);

  const handleAddLocation = () => {
    if (
      selectedGugun &&
      !selectedLocations.some((location) => location.gugun === selectedGugun) &&
      selectedLocations.length < 3
    ) {
      setSelectedLocations([
        ...selectedLocations,
        [selectedSido, selectedGugun ],
      ]);
      setSelectedGugun(""); // Reset gugun selection
    }
  };

  const handleRemoveLocation = (gugunToRemove) => {
    setSelectedLocations(
      selectedLocations.filter((location) => location[1] !== gugunToRemove)
    );
  };

  const handleMyLocationRemove = () => {
    setMyLocation("");
    setMyGugun("");
  };

  const handleSubmit = () => {
    setLocation([myLocation, myGugun]);
    setPartnerLocation(selectedLocations);

    // const locationData = {
    //   location: [myLocation, myGugun ],
    //   partnerLocation: selectedLocations,
    // };
    // console.log(locationData);
    navigate("/post");
  };

  return (
    <Cont>
      <SContainer>
        <h1>위치 설정</h1>
        <h3>내 위치 입력</h3>
        <Select
          value={myLocation}
          id="myLocation"
          onChange={(e) => setMyLocation(e.target.value)}
        >
          <option value="">시/도 선택</option>
          {Object.keys(areas).map((sido) => (
            <option key={sido} value={sido}>
              {sido}
            </option>
          ))}
        </Select>
        <Select
          value={myGugun}
          id="gugun"
          onChange={(e) => setMyGugun(e.target.value)}
          disabled={!myLocation}
        >
          <option value="">구/군 선택</option>
          {myLocation &&
            areas[myLocation].map((gugun) => (
              <option key={gugun} value={gugun}>
                {gugun}
              </option>
            ))}
        </Select>
        {myLocation && myGugun && (
          <LocationItem>
            {myLocation} {myGugun}
            <Button
              btnInfo={{
                text: "x",
                color: "red",
                width: "45px",
                onClick: handleMyLocationRemove,
              }}
              style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
            />
          </LocationItem>
        )}
        <h3>상대방의 위치 설정</h3>
        <Select
          value={selectedSido}
          id="selectedSido"
          onChange={(e) => setSelectedSido(e.target.value)}
        >
          <option value="">시/도 선택</option>
          {Object.keys(areas).map((sido) => (
            <option key={sido} value={sido}>
              {sido}
            </option>
          ))}
        </Select>
        <Select
          value={selectedGugun}
          id="selectedGugun"
          onChange={(e) => setSelectedGugun(e.target.value)}
          disabled={!selectedSido}
        >
          <option value="">구/군 선택</option>
          {gugunOptions.map((gugun) => (
            <option key={gugun} value={gugun}>
              {gugun}
            </option>
          ))}
        </Select>
        <ButtonContainer>
          <Button
            btnInfo={{
              text: "장소 추가",
              color: "white",
              width: "345px",
              onClick: handleAddLocation,
            }}
            style={{ marginTop: "20px" }}
          />
        </ButtonContainer>
        <LocationList>
          {selectedLocations.map((location, index) => (
            <LocationItem key={index}>
              {location[0]} {location[1]}
              <Button
                btnInfo={{
                  text: "x",
                  color: "red",
                  width: "45px",
                  onClick: () => handleRemoveLocation(location[1]),
                }}
                style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
              />
            </LocationItem>
          ))}
        </LocationList>
        <ButtonContainer>
          <Button
            btnInfo={{
              text: "입력",
              width: "345px",
              onClick: handleSubmit,
            }}
            style={{ marginTop: "20px" }}
          />
        </ButtonContainer>
      </SContainer>
    </Cont>
  );
};

export default LocationSelector;

const Cont = styled.div`
  height: 610px;
  width: 375px;
  overflow-Y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-X: hidden;
  background-color: var()
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  margin: 0 auto;
  padding: 0px 25px 0px 20px;
  h3 {
    color: white;
    text-align: flex-start;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  h1 {
    margin: 0;
    color: #8ff2a0;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const SButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const LocationList = styled.div`
  margin-top: 10px;
`;

const LocationItem = styled.div`
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;