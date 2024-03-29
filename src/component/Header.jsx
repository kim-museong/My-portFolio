import { useCallback, useState } from "react";
import * as S from "../styled/header.style";
import Button from "./Button";
import { IoSettingsOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { palette } from "../styled/colorPalette";

const Header = () => {
  const [isOpenSideBar, setisOpenSideBar] = useState(true);

  const toggleSidebarHandler = useCallback(() => {
    setisOpenSideBar((prev) => !prev);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderBox $open={isOpenSideBar}>
          <S.GuideArrow onClick={toggleSidebarHandler} $open={isOpenSideBar}>
            <RiArrowLeftDoubleLine />
          </S.GuideArrow>

          <S.ListItem>
            <Button color={"black"} image={<RiHome2Line />} size="s">
              home
            </Button>

            <Button
              color={palette.blue[1]}
              image={<SiAboutdotme />}
              url="about"
              size="s"
            >
              about
            </Button>

            <Button
              color={"#56647b"}
              image={<IoSettingsOutline />}
              url="skill"
              size="s"
            >
              skill
            </Button>

            <Button
              color={"#FF4D4D"}
              image={<PiProjectorScreenChartLight />}
              url="project"
              size="s"
            >
              project
            </Button>
          </S.ListItem>
        </S.HeaderBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
