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

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  place-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 30px 0 50px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 50%;
`;

export const Introduction = styled.div`
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
    animation: ${fadeIn} 0.8s ease forwards;
  }
`;

export const SubTitle = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
  flex-basis: 100%;
  margin: 100px 0;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    margin: 0 20px;
    height: 1px;
    background-color: white;
  }
`;

export const Contact = styled.div`
  display: flex;
  font-size: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    background-color: ${palette.blue[1]};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
  }

  div + div {
    margin-left: 30px;
  }
`;

export const ResumeList = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileList = styled.ul`
  display: flex;
  flex-direction: column;
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
