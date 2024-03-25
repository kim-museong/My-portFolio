import styled, { keyframes, css } from "styled-components";

const showBox = keyframes`
  0% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`;

const upAndDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const borderBlink = keyframes`
  0%, 100% {
    box-shadow: 0 0 3px 4px white
  }
  50% {
    box-shadow: none;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 100px 0;
  animation: ${showBox} 0.5s;
  letter-spacing: 1px;

  @media all and (max-width: 767px) {
    width: 90%;
    padding: 30px 0 50px;
  }
`;

export const ViewImage = styled.div`
  width: 100%;
  height: 600px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
  background-image: url(${({ $selectimage }) => `${$selectimage}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media all and (max-width: 767px) {
    height: 200px;
    font-size: 14px;
  }
`;

export const UpAndDownBox = styled.div`
  margin-top: 50px;

  svg {
    animation: ${upAndDown} 1s ease infinite;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 34px;
  padding: 20px 0;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const ImageList = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    height: 100px;
    object-fit: scale-down;
    border: 1px solid white;
    cursor: pointer;

    animation: ${({ $showiamge }) =>
      $showiamge
        ? undefined
        : css`
            ${borderBlink} 1.3s ease-in-out infinite
          `};

    @media all and (max-width: 767px) {
      width: 70px;
      height: 40px;
    }
  }

  @media all and (max-width: 767px) {
    width: auto;
  }
`;

export const tagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;

export const PeriodBox = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

export const ExplanationBox = styled.div`
  padding: 10px 0 30px;
`;

export const ReasonBox = styled.div`
  .title {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const ProjectExplanation = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 20px 0;
`;

export const Container = styled.div`
  margin: 15px 0;
  color: white;

  .fontUp {
    font-size: 25px;
    margin-bottom: 10px;
  }

  @media all and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ContentBox = styled.div`
  background-color: white;
  border-radius: 50px;
  color: black;
  padding: 8px 15px;
  text-align: center;
  font-size: 14px;
`;
