import { useLocation } from "react-router-dom";
import Header from "./Header";
import * as SH from "../styled/share.style";

const Layout = ({ children, title }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Header /> : ""}

      <SH.Wrapper>
        <SH.TitleBox>{title}</SH.TitleBox>
        {children}
      </SH.Wrapper>
    </>
  );
};

export default Layout;
