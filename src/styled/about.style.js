import styled, { keyframes } from "styled-components";
import { palette } from "./colorPalette";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AboutBox = styled.div`
  width: 80%;
  margin: 50px auto 0;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 5%;
`;

export const AboutContentBox = styled.div`
  width: 100%;
  font-size: 26px;

  p {
    padding: 10px;
  }

  span {
    font-size: 35px;
    font-weight: 500;
    color: ${palette.blue[1]};
    padding: 0 5px;
    animation: ${fadeIn} 1s ease forwards;
  }
`;

export const ProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  padding: 20px 40px;
  color: white;

  &.btn {
    cursor: pointer;
  }
`;

export const AboutTagBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;

  li {
    background-color: ${palette.gray[0]};
    border-radius: 18px;
    color: black;
    padding: 5px 20px;
    font-size: 1rem;
  }
`;

export const ResumeListBox = styled.ul`
  width: 100%;
  display: flex;
  padding-top: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
