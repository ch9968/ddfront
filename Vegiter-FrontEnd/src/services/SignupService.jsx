import axios from "axios";
import SignupModel from "../models/SignupModel";
import { setUserId } from "./PersonService";


let headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*'
}
let signup = new SignupModel();
let formData = new FormData();

export function setSignupData(data) {
    signup = data;
    console.log(signup);
}

export function setLocation(location) {
    signup.location = location;
    console.log(signup);
}

export function setPartnerLocation(partnerLocation) {
    signup.partnerLocation = partnerLocation;
    console.log(signup);
}

export async function setProfilePic(image) {
    console.log(signup);
    formData.append(
      "data",
      new Blob([JSON.stringify(signup)], { type: "application/json" })
    );
    formData.append("file", image);

    console.log(formData);

    const response = await axios.post(`${process.env.REACT_APP_SEVER_URL}/join`, formData, headers)
    .catch((error) => console.log(error.message));
    setUserId(signup.userId);
    console.log(response);
    return response;

}