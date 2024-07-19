import client from "./client";

export const postRegister = async (
  userId,
  password,
  nickname,
  birthdate,
  gender,
  preferredGender,
  vegan,
  hobbies
) => {
  try {
    const response = await client.post("/join", {
      userId,
      password,
      nickname,
      birthdate,
      gender,
      preferredGender,
      vegan,
      hobbies,
    });
    return response;
  } catch (error) {
    console.log("회원가입 실패", error);
    throw error;
  }
};

export const postLogin = async (userId, password) => {
  try {
    const response = await client.post("/login", {
      userId,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("로그인 실패", error);
    throw error;
  }
};
