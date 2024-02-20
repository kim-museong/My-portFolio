import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  top: 20px;
  left: 0;
  z-index: 2;
  position: relative;
`;

export const HeaderBox = styled.div`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-260px")};
  padding: 15px 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px 0 0 50px;
  transition: all 0.2s ease-in-out;
`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 30px 0 80px;
  gap: 30px;

  @media all and (max-width: 767px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const Item = styled(Link)`
  font-family: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(150, 150, 150);
  cursor: pointer;

  &:hover {
    color: #3b3c3d;
  }

  &.on {
    color: #3b3c3d;
    font-weight: bold;
  }
`;

export const GuideArrow = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: white;

  svg {
    transform: ${({ open }) => (open ? "scaleX(-1)" : "")};
  }
`;
