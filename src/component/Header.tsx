import React, { useEffect, useState } from "react";
import * as S from "../styled/header.style";
import {
  HiUserCircle,
  HiFlag,
  HiCog6Tooth,
  HiRectangleGroup,
} from "react-icons/hi2";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { scroller } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../reduce";

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isShowBox, setIsShowBox] = useState<boolean>(false);

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

  const onShowListBtn = () => {
    setIsShowBox((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollY);

    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  }, []);

  return (
    <>
      {!isShowBox ? (
        <>
          <S.MobileTitleBox>
            <S.MobileBtnBox>
              <GiHamburgerMenu className="mobile" onClick={onShowListBtn} />
            </S.MobileBtnBox>
            <S.NameBox>KIM MUSEONG</S.NameBox>
          </S.MobileTitleBox>
          <S.Space />
        </>
      ) : (
        <S.Space />
      )}

      <S.HeaderWrapper className={isShowBox ? "show" : "close"}>
        {isShowBox && (
          <S.MobileBtnBox>
            <MdClose className="mobile" onClick={onShowListBtn} />
          </S.MobileBtnBox>
        )}

        <S.NameBox>KIM MUSEONG</S.NameBox>

        <S.ContactBox>
          <S.ContactItem to="https://github.com/kim-museong">
            <BsGithub />
          </S.ContactItem>

          <S.ContactItem to="https://www.instagram.com/mu._.0419/">
            <BsInstagram />
          </S.ContactItem>
        </S.ContactBox>

        <S.ListItem>
          <S.Item
            to="about"
            style={{
              color:
                scrollPosition >= 0 && scrollPosition <= about ? "white" : "",
            }}
            onClick={() => onClickButton("about")}
          >
            <HiUserCircle />
            <p>ABOUT</p>
          </S.Item>

          <S.Item
            to="resume"
            style={{
              color:
                scrollPosition > about && scrollPosition <= resume
                  ? "white"
                  : "",
            }}
            onClick={() => onClickButton("resume")}
          >
            <HiFlag />
            <p>RESUME</p>
          </S.Item>

          <S.Item
            to="skill"
            style={{
              color:
                scrollPosition > resume && scrollPosition <= skill
                  ? "white"
                  : "",
            }}
            onClick={() => onClickButton("skill")}
          >
            <HiCog6Tooth />
            <p>SKILL</p>
          </S.Item>

          <S.Item
            to="project"
            style={{ color: scrollPosition > skill ? "white" : "" }}
            onClick={() => onClickButton("project")}
          >
            <HiRectangleGroup />
            <p>PROJECT</p>
          </S.Item>
        </S.ListItem>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
