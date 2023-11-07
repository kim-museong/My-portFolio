import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 30px;
`;

export const TitleBox = styled.div`
  display: inline-block;
  font-weight: bold;

  @media all and (min-width: 1024px) {
    font-size: 80px;
    margin-bottom: 100px;
  }
  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 30px;
    margin: 30px 0;
  }
`;
