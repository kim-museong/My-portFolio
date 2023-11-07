import styled from "styled-components";

export const Wrapper = styled.div`
  @media all and (min-width: 1024px) {
    display: flex;
  }

  @media all and (max-width: 767px) {
    padding: 20px;
  }
`;

export const SpaceBlock = styled.div`
  @media all and (min-width: 1024px) {
    width: 500px;
    height: 100%;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    display: none;
  }
`;
