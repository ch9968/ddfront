import cat from "../assets/cat.jpg";
import princess from "../assets/princessCat.jpg";

export default class PersonModel {

    /*
        {
            partnerId: string,
            nickname: string,
            age: string,
            gender: string,
            imageLink: string,
            location2: string,
            veganType: string,
            hobby: array
        }

        {
            userId: "1",
            name: "키렌",
            nickname: "키렌",
            age: 22,
            veganState: 1,
            imageLink: cat,
            gender: "male",
            partnerGender: "female",
            hobby: ["수영", "찬희랑 놀기", "자기"],
            location: ["Seoul","Mapo"],
            partnerLocation: ["Seoul","Mapo"]
        },
        {
            userId: "2",
            name: "찬희",
            nickname: "찬희",
            age: 22,
            veganState: 1,
            imageLink: princess,
            gender: "female",
            partnerGender: "male",
            hobby: ["수영", "키렌랑 놀기", "자기"],
            location: ["Seoul","Mapo"],
            partnerLocation: ["Seoul","Mapo"]
        }
    */

    people = [];

    currentIndex = 0;
    
    person = null;

    userId = 'dummy2';

    showContent = false;
}

export var person = new PersonModel();