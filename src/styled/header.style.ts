import styled from "styled-components";
import * as Scroll from "react-scroll";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgb(55, 76, 92);
  color: white;

  @media all and (min-width: 1024px) {
    padding: 16px 0;
  }

  @media all and (max-width: 767px) {
    padding: 15px 30px;
  }
`;

export const ListItem = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 30px;

  @media all and (max-width: 767px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const Item = styled(Scroll.Link)`
  display: flex;
  align-items: center;
  font-family: bold;
  font-size: 18px;
  color: rgb(150, 150, 150);
  cursor: pointer;

  &:hover {
    color: white;
  }

  &.on {
    color: white;
    font-weight: bold;
  }

  @media all and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const SpaceBox = styled.div`
  background-color: rgb(55, 76, 92);
  height: 55px;
`;
