import styled from "styled-components";
import * as Router from "react-router-dom";
import * as Scroll from "react-scroll";

export const HeaderWrapper = styled.div`
  width: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  height: 100%;
  color: white;

  @media all and (min-width: 1024px) {
    min-width: 300px;
    padding: 20px 40px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    min-width: 100px;
    padding: 50px 20px;

    &.show {
      left: 0;
    }

    &.close {
      left: -300px;
    }
  }
`;

export const NameBox = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media all and (min-width: 1024px) {
    padding: 10px;
    margin: 30px 0;
  }

  @media all and (max-width: 767px) {
    padding-top: 10px;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;

export const ContactItem = styled(Router.Link)`
  color: white;
  font-size: 40px;
  cursor: pointer;
`;

export const ListItem = styled.ul`
  li + li {
    margin-top: 10px;
  }
`;

export const Item = styled(Scroll.Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: bold;
  font-size: 30px;
  color: rgb(150, 150, 150);
  cursor: pointer;

  p {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const MobileTitleBox = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-bottom: 10px;
  background: black;
  color: white;
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const Space = styled.div`
  height: 50px;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const MobileBtnBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    .mobile {
      display: none;
    }
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    &.mobile {
      display: block;
    }
  }
`;
