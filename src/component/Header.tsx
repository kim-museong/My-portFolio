import React from "react";
import * as S from "../styled/header.style";
import {
  HiUserCircle,
  HiFlag,
  HiCog6Tooth,
  HiRectangleGroup,
} from "react-icons/hi2";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Header: React.FC = () => {
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
          <S.Item to="about" smooth={true}>
            <HiUserCircle />
            <p>ABOUT</p>
          </S.Item>

          <S.Item to="resume" smooth={true}>
            <HiFlag />
            <p>RESUME</p>
          </S.Item>

          <S.Item to="skill" smooth={true}>
            <HiCog6Tooth />
            <p>SKILL</p>
          </S.Item>

          <S.Item to="project" smooth={true}>
            <HiRectangleGroup />
            <p>PROJECT</p>
          </S.Item>
        </S.ListItem>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
