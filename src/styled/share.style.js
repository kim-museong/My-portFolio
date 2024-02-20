import styled from "styled-components";
import { palette } from "./colorPalette";

export const Wrapper = styled.div`
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  background-color: ${palette.backgroundColor};
  color: white;
`;

export const TitleBox = styled.div`
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 80px;
  padding-top: 80px;
  letter-spacing: 15px;
`;
