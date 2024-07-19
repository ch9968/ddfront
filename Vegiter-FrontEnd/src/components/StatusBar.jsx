import styled from "styled-components";
import wifiIcon from "../assets/icn_wifi.svg";
import cellularIcon from "../assets/icn_cellular.svg";
import batteryIcon from "../assets/icn_battery.svg";

const StatusBarComponent = () => {
  return (
    <StatusCont>
      <TimeCont>9:41</TimeCont>
      <LevelSection>
        <img
          src={cellularIcon}
          alt="Cellular Icon"
          style={{ width: 19 + "px" }}
        />
        <img src={wifiIcon} alt="Wifi Icon" style={{ width: 17 + "px" }} />
        <img
          src={batteryIcon}
          alt="Battery Icon"
          style={{ width: 27 + "px" }}
        />
      </LevelSection>
    </StatusCont>
  );
};

export default StatusBarComponent;

const StatusCont = styled.div`
  height: 54px;
  width: 100%;
`;

const TimeCont = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  color: white;
  top: 18px;
  left: 42px;
  font-weight: 200;
  font-size: 17px;
  font-family: var(--sf-pro);
  line-height: 22px;
`;

const LevelSection = styled.div`
  width: 140.5px;
  height: 100%;
  display: flex;
  justify-content: right;
  padding-right: 24px;
  color: var(--white);
  float: right;

  img {
    height: 13px;
    padding-left: 8px;
    padding-top: 23px;
  }
`;
