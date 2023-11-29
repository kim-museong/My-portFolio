import styled, { keyframes } from "styled-components";

export const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0;

  @media all and (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const TitleBox = styled.div`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media all and (min-width: 1024px) {
    font-size: 30px;
    padding-bottom: 100px;
  }
  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 30px;
    margin: 30px 0;
  }
`;
