import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setProfilePic } from "../services/SignupService";
// import { postPost } from "../api/post";
import Button from "../components/Button";
import { getUserId } from "../services/PersonService";

const PostingPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  let posted = false;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function signUp() {
    if (file) {
      try {
        console.log(file);
        const res = await setProfilePic(file).then((response) => {
          console.log("Profile picture upload result:", response);
          if (response.status == 200) {
            alert("프로필 사진 업로드 성공!");
            posted = true;
          } else {
            alert("사진 업로드에 실패했습니다. 다시 시도해주세요.");
          }
        });
      } catch (error) {
        console.log("사진 업로드에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("사진을 선택해주세요.");
      posted = false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp().then(() => {
      if (posted) {
        let userId = getUserId();
        navigate(`/swipe/main/${userId}`);
      }
    })
  };

  return (
    <SLayout>
      <SContainer>
        <h1>프로필 설정</h1>
        <h3>마음에 드는 사진을 추가해 보세요</h3>
        <SForm onSubmit={handleSubmit}>
          <SImageContainer>
            <SInputLabel>
              {file ? (
                <SImage src={URL.createObjectURL(file)} alt="프로필 사진" />
              ) : (
                <SPlus>+</SPlus>
              )}
              <SInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </SInputLabel>
          </SImageContainer>
          <SButtonContainer>
            <Button
              btnInfo={{
                text: "프로필 설정 완료",
                color: "black",
                onClick: handleSubmit,
              }}
              type="submit"
            />
          </SButtonContainer>
        </SForm>
      </SContainer>
    </SLayout>
  );
};

export default PostingPage;

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 610px;
  overflow: hidden;
  background-color: #000;
  color: #fff;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  height: 610px;
  padding: 20px;
  border-radius: 10px;
  overflow-y: hidden;
  h3 {
    width: 100%;
    color: white;
    text-align: flex-start;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  h1 {
    width: 100%;
    margin: 0;
    color: #8ff2a0;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const STitle = styled.h1`
  font-size: 24px;
  color: #00ff00;
`;

const SSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SImageContainer = styled.div`
  width: 338px;
  height: 400px;
  border: 1px dashed #E2FA76;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const SInput = styled.input`
  display: none;
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const SPlus = styled.span`
  font-size: 100px;
  color: #00ff00;
`;

const SButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
