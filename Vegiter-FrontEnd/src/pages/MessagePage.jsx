import styled from "styled-components";

const MessagePage = () => {
  return (
    <SLayout>
      <SContainer>
        <NoMessages>메시지가 없습니다.</NoMessages>
      </SContainer>
    </SLayout>
  );
};

export default MessagePage;

const SLayout = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  width: 344px;
  height: 540px;
  border-radius: 30px;
  background-color: #212a39;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  gap: 20px;
  width: 100%;
`;

const NoMessages = styled.div`
  color: #d9d9d9;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;