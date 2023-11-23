import styled from "styled-components";
import { moveUpDown } from "./share.style";

export const AboutBox = styled.div`
  text-align: center;

  @media all and (min-width: 1024px) {
    font-size: 32px;
    margin-bottom: 50px;
    padding: 20px;
  }
  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const ProfileList = styled.ul`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 6px solid rgb(55, 76, 92);
  border-radius: 45px;
  padding: 30px 0;

  &.btn {
    cursor: pointer;
  }
`;

export const AboutName = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const AboutContent = styled.div`
  font-size: 20px;
  color: rgb(100, 100, 100);

  svg {
    margin-top: 10px;
    font-size: 50px;
    animation: ${moveUpDown} 1s ease-in-out infinite;
  }
`;
