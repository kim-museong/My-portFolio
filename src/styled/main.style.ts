import styled from "styled-components";
import { moveUpDown } from "./share.style";

export const Wrapper = styled.div`
  @media all and (min-width: 1024px) {
    width: 100%;
  }
`;

export const thumbnailBox = styled.div`
  background-color: rgb(55, 76, 92);
  height: 500px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  padding: 8px 15px 8px 20px;
  border: none;
  border-radius: 20px;
  animation: ${moveUpDown} 1s ease-in-out infinite;

  @media all and (max-width: 767px) {
    margin: 50px auto;
  }
`;

export const DownSvg = styled.div`
  margin-left: 5px;
  color: rgb(55, 76, 92);
  font-size: 20px;
`;
