import styled from "styled-components";
import { moveUpDown } from "./share.style";
import { palette } from "./colorPalette";

export const Wrapper = styled.div`
  @media all and (min-width: 1024px) {
    width: 100%;
  }
`;

export const thumbnailBox = styled.div`
  background-color: ${palette.mainColor};
  height: 700px;
  padding-top: 150px;
  text-align: center;
`;

export const thumbnailTitle = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 7px;

  @media all and (max-width: 767px) {
    font-size: 20px;
    padding: 20px;
  }
`;

export const thumbnailContent = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: rgb(230, 230, 230);

  @media all and (max-width: 767px) {
    font-size: 14px;
    padding: 20px;
  }
`;

export const NextBtn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 300px auto 0;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  color: ${palette.mainColor};
  animation: ${moveUpDown} 1s ease-in-out infinite;
  text-align: center;

  svg {
    margin-top: 4px;
    color: ${palette.mainColor};
  }

  @media all and (max-width: 767px) {
    margin: 50px auto;
  }
`;
