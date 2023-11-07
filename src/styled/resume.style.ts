import styled from "styled-components";

export const ResumeBox = styled.div`
  padding: 30px;
  font-size: 28px;

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
  font-size: 20px;
  font-weight: bold;

  p {
    margin-left: 10px;
  }

  svg {
    color: red;
  }

  @media all and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const TitleBox = styled.div`
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
