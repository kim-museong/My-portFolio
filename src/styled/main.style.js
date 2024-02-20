import styled from "styled-components";
import { Wrapper } from "./share.style";

export const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const MainTitle = styled.div`
  color: white;
  font-size: 80px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 15px;
`;

export const MainContent = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: white;
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
