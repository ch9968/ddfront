import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profileIcon from "../assets/icn_profile.svg";
import notifIcon from "../assets/icn_notif.svg";
import messageIcon from "../assets/icn_message.svg";
import {getUserId} from "../services/PersonService";

const NavComponent = () => {

  const [unreadNotif, setUnreadNotif] = useState(1);
  let [unreadMessage, setUnreadMessage] = useState(3);
  let userId = getUserId();

  useEffect(() => {
    userId = getUserId();
  }, [])

  return (
    <SLayout>
      <nav style={{width: 100 + '%', height: 100 + '%', paddingRight: 9.75 + 'px'}}>
        <VegiterNavLink to={`/swipe/main/${userId}`}>Vegiter</VegiterNavLink>
        <MessageNavLink to="/swipe/message">
          <img src={messageIcon} alt="Message Icon" />
          {unreadMessage > 0 &&
            <MessageIcon><p>{unreadMessage}</p></MessageIcon>
          }
        </MessageNavLink>
        <NotifNavLink to={`/swipe/matches/${userId}`}>
          <img src={notifIcon} alt="Notification Icon" />
          {unreadNotif > 0 &&
            <NotifIcon><p>{unreadNotif}</p></NotifIcon>
          }
        </NotifNavLink>
        {/* <ProfileNavLink to="/swipe/setting">
          <img src={profileIcon} alt="Profile Icon" />
        </ProfileNavLink> */}
      </nav>
    </SLayout>
  );
};

export default NavComponent;

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  width: 100%;
  max-width: 375px;
  height: 48px;

  background-color: var(--black);
`;

const VegiterNavLink = styled(NavLink)`
  padding: 5px;
  padding-left: 15px;
  font-family: var(--big-font-family);
  line-height: 22px;
  text-align: center;
  float: left;
  text-decoration: none;
  background: var(--green-gradient); 
  -webkit-text-fill-color: transparent; 
  -webkit-background-clip: text;
`;


const MessageNavLink = styled(NavLink)`
  color: white;
  position: relative;
  padding-right: 14.25px;
  padding-left: 2.25px;
  padding-top: 5px;
  float: right;

  &.active {
    padding-right: 14.25px;
    padding-left: 2.25px;
    padding-top: 5px;
    background: var(--green-gradient); 
    -webkit-mask-image: url(${messageIcon});
    mask-image: url(${messageIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: 2.25px 5px;

    > img {
      opacity: 0;
    }
  }
`;

const NotifNavLink = styled(NavLink)`
  color: white;
  position: relative;
  padding-right: 14.25px;
  padding-left: 2.25px;
  padding-top: 5px;
  float: right;

  &.active {
    padding-right: 14.25px;
    padding-left: 2.25px;
    padding-top: 5px;
    background: var(--green-gradient); 
    -webkit-mask-image: url(${notifIcon});
    mask-image: url(${notifIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: 2.25px 5px;

    > img {
      opacity: 0;
    }
  }
`;

const ProfileNavLink = styled(NavLink)`
  color: white;
  padding-right: 14.25px;
  padding-left: 2.25px;
  padding-top: 5px;
  float: right;

  &.active {
    padding-right: 14.25px;
    padding-left: 2.25px;
    padding-top: 5px;
    background: var(--green-gradient); 
    -webkit-mask-image: url(${profileIcon});
    mask-image: url(${profileIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: 2.25px 5px;

    > img {
      opacity: 0;
    }
  }
`;

const MessageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-items: center;
  align-items: center;
  right: 7px;
  top: 4px;
  background: var(--green-gradient);
  height: 13px;
  width: 13px;
  border-radius: 50%;  

  p {
    display: flex;
    justify-items: center;
    align-items: center;
    margin: auto;
    height: 13px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 7px;
    text-align: center;
    color: black;
  }
`;

const NotifIcon = styled.div`
  position: absolute;
  display: flex;
  justify-items: center;
  align-items: center;
  right: 10px;
  top: 4px;
  background: var(--green-gradient);
  height: 13px;
  width: 13px;
  border-radius: 50%;  

  p {
    display: flex;
    align-items: center;
    margin: auto;
    height: 13px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 7px;
    text-align: center;
    color: black;
  }
`;