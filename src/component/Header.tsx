import React, { useEffect, useState } from "react";
import * as S from "../styled/header.style";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";
import { RootState } from "../reduce";

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const { about, resume, skill } = useSelector((state: RootState) => ({
    about: state.main.about,
    resume: state.main.resume,
    skill: state.main.skill,
  }));

  const changeScrollY = () => {
    setScrollPosition(window.scrollY);
  };

  const onClickButton = (name: string) => {
    scroller.scrollTo(name, {
      duration: 800,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollY);

    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  }, []);

  return (
    <>
      <S.HeaderWrapper>
        <S.ListItem>
          <S.Item
            to="about"
            className={
              scrollPosition >= 0 && scrollPosition <= about ? "on" : ""
            }
            onClick={() => onClickButton("about")}
          >
            <p>ABOUT</p>
          </S.Item>

          <S.Item
            to="resume"
            className={
              scrollPosition > about && scrollPosition <= resume ? "on" : ""
            }
            onClick={() => onClickButton("resume")}
          >
            <p>RESUME</p>
          </S.Item>

          <S.Item
            to="skill"
            className={
              scrollPosition > resume && scrollPosition <= skill ? "on" : ""
            }
            onClick={() => onClickButton("skill")}
          >
            <p>SKILL</p>
          </S.Item>

          <S.Item
            to="project"
            className={scrollPosition > skill ? "on" : ""}
            onClick={() => onClickButton("project")}
          >
            <p>PROJECT</p>
          </S.Item>
        </S.ListItem>
      </S.HeaderWrapper>
      <S.SpaceBox />
    </>
  );
};

export default Header;
