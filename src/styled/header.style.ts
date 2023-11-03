import styled from "styled-components";
import * as Router from "react-router-dom";
import * as Scroll from "react-scroll";

export const HeaderWrapper = styled.div`
  width: auto;
  min-width: 300px;
  position: fixed;
  background-color: black;
  height: 100%;
  padding: 20px 40px;
  color: white;
`;

export const NameBox = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 50px 0 10px;
  padding: 20px 0;
  border-bottom: 1px solid white;
  font-size: 24px;
  font-weight: bold;
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
