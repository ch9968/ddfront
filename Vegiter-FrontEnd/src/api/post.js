import client from "./client";

export const postPost = async (request, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    // JSON 객체를 Blob 타입으로 변환, 원본은 application/json임을 명시
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res;
  } catch (err) {
    console.log("사진 등록 실패", err);
    return err;
  }
};
