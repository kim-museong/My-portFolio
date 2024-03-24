import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { palette } from "../styled/colorPalette";

export const Wrapper = styled.div`
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  background-color: ${palette.backgroundColor};
  color: white;
`;

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Header /> : ""}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;
