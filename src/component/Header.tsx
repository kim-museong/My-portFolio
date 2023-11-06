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

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const scrollToAbout = (name: string) => {
    scroller.scrollTo(name, {
      duration: 800,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.HeaderWrapper>
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
                scrollPosition >= 0 && scrollPosition <= 400 ? "white" : "",
            }}
            onClick={() => scrollToAbout("about")}
          >
            <HiUserCircle />
            <p>ABOUT</p>
          </S.Item>

          <S.Item
            to="resume"
            style={{
              color:
                scrollPosition > 400 && scrollPosition <= 900 ? "white" : "",
            }}
            onClick={() => scrollToAbout("resume")}
          >
            <HiFlag />
            <p>RESUME</p>
          </S.Item>

          <S.Item
            to="skill"
            style={{
              color:
                scrollPosition > 900 && scrollPosition <= 1600 ? "white" : "",
            }}
            onClick={() => scrollToAbout("skill")}
          >
            <HiCog6Tooth />
            <p>SKILL</p>
          </S.Item>

          <S.Item
            to="project"
            style={{ color: scrollPosition > 1600 ? "white" : "" }}
            onClick={() => scrollToAbout("project")}
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
