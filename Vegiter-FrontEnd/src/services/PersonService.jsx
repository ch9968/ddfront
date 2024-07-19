import { person } from "../models/PersonModel";
import axios from "axios";
import { setPopup } from "../pages/MainPage";

let headers = {
  'Accept': 'application/json', 
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export function setUserId(userId) {
  person.userId = userId;
}

export function getUserId() {
  return person.userId;
}

export const getPeople = async () => {
  console.log(person.userId);
  axios.post(`${process.env.REACT_APP_SEVER_URL}/swipe`, {userId: person.userId}, headers)
    .then(response => {
      person.people = response.data; 
      person.person = person.people[0];
    })
    .catch((error) => console.log(error.message));
  
  person.person = person.people[0];
  person.showContent = true;
}

export const getPerson = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(person.person);
    }, 1000);
  })
}

export const showContent = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(person.showContent);
    }, 1000);
  })
}

export const nextPerson = () => {
  if (person.currentIndex < person.people.length - 1) {
    person.currentIndex++;
  }
  person.person = person.people[person.currentIndex];
}

export const previousPerson = () => {
  if (person.currentIndex > 0) {
    person.currentIndex--;
  }
  person.person = person.people[person.currentIndex];
}

export const updatePerson = () => {
  return person.person;
}

export const updateAction = () => {
  return person.action;
}

export const likePerson = async () => {
  console.log('Like');
}

export const heartPerson = async () => {
  const response = axios.post(`${process.env.REACT_APP_SEVER_URL}/swipe/like`, {userId: person.userId, partnerId: person.person.partnerId}, headers)
    .then(response => {console.log(response.data.isMatched); return response.data.isMatched;})
    .catch((error) => console.log(error.message));
  return response;
}

export function getMatchPopup() {
  return person.matchPopup;
}

export function setMatchPopup(isMatch) {
  console.log(person.matchPopup);
  person.matchPopup = isMatch;
  console.log(person.matchPopup);
}

export const setAction= async (text) => {
  person.action = text;
}

export const getAction = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(person.action);
    }, 1000);
  })
}

export default getPeople;
