import styled from "styled-components";
import { palette } from "./colorPalette";

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: ${palette.backgroundColor};

  /* 모바일 */
  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const MainTitle = styled.div`
  color: white;
  font-size: 80px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 15px;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const MainContent = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: white;

  span {
    font-size: 40px;
    font-weight: 500;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 19px;

    span {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

export const ListBtnBox = styled.ul`
  width: 50%;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ContactBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  font-size: 18px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 5px;
    margin-right: 5px;
  }
`;
