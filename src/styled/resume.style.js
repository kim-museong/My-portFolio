import styled from "styled-components";
import { TitleBox, Wrapper } from "./share.style";

export const ResumeWrapper = styled(Wrapper)`
  background-color: rgb(179, 195, 208);
`;

export const ResumeTitle = styled(TitleBox)``;

export const ResumeBox = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  font-size: 20px;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 0;
  }
`;

export const DataBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;

  p {
    margin-left: 10px;
  }

  svg {
    color: rgb(200, 17, 30);
  }

  @media all and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const NameBox = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailBox = styled.div`
  display: inline-block;
  font-size: 25px;
  padding: 30px 50px;
  border: 4px solid black;
  border-radius: 20px;

  @media all and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px 30px;
  }
`;
