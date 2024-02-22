import styled from "styled-components";
import { palette } from "../styled/colorPalette";

const Wrapper = styled.div`
  background-color: ${palette.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 40px;
  letter-spacing: 5px;
`;

const Content = styled.div`
  font-size: 26px;
`;

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Title>404</Title>
        <Content>페이지를 찾을 수 없습니다.</Content>
      </Wrapper>
    </>
  );
};

export default NotFound;
