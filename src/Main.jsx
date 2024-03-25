import * as S from "./styled/main.style";
import Button from "./component/Button";
import { IoSettingsOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { palette } from "./styled/colorPalette";
import "./Main.css";

const Main = () => {
  return (
    <>
      <S.MainWrapper>
        <S.MainTitle>my-portfolio</S.MainTitle>

        <S.MainContent>
          안녕하세요. 프론트엔드 개발자를 꿈꾸는 <span>김무성</span> 입니다.
        </S.MainContent>

        <S.ListBtnBox>
          <S.ListItem>
            <Button
              color={palette.blue[1]}
              image={<SiAboutdotme />}
              url="about"
            >
              about
            </Button>
          </S.ListItem>

          <S.ListItem>
            <Button
              color={palette.skillColor}
              image={<IoSettingsOutline />}
              url="skill"
            >
              skill
            </Button>
          </S.ListItem>

          <S.ListItem>
            <Button
              color={palette.projectColor}
              image={<PiProjectorScreenChartLight />}
              url="project"
            >
              project
            </Button>
          </S.ListItem>
        </S.ListBtnBox>
      </S.MainWrapper>
    </>
  );
};

export default Main;
