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
  place-items: center;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
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
  text-align: center;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 50%;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    width: 100px;
    margin-bottom: 10px;
  }
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

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 13px;

    span {
      font-size: 16px;
    }
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

  /* 모바일 */
  @media screen and (max-width: 767px) {
    margin: 30px 0;
  }
`;

export const Contact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 12px;
    display: block;

    div {
      width: 200px;
      margin: 0 auto;
    }

    svg {
      width: 40px;
      height: 40px;
    }

    div + div {
      margin-top: 20px;
    }
  }
`;

export const ResumeList = styled.div`
  width: 700px;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    display: block;
  }
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
