import React from "react";
import * as S from "../styled/project.style";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Project: React.FC = () => {
  const ProjectListHandler = (name: string, repeat: number) => {
    const divs = Array.from({ length: repeat }, (v, i) => i + 1);

    return divs.map((index) => (
      <S.ImgItem key={index}>
        <img src={require(`../images/${name}${index}.png`)} alt="" />
      </S.ImgItem>
    ));
  };

  return (
    <S.ProjectWrapper>
      <S.ProjectNameBox>Project</S.ProjectNameBox>

      <S.ProjectTitle>
        <div className="flex">
          <p className="pet">펫프렌즈</p>
          <Link to="https://github.com/kim-museong/Pet-Friends-Project2">
            <FaGithub />
          </Link>
        </div>

        <S.GoSite to="http://docs.yi.or.kr:3002/">
          <span>사이트바로가기</span>
          <FaArrowRightToBracket />
        </S.GoSite>
      </S.ProjectTitle>
      <S.ImgListBox>{ProjectListHandler("petF", 4)}</S.ImgListBox>

      <S.ProjectTitle>
        <div className="flex">
          <p className="profile">나만의 포트폴리오</p>
          <Link to="https://github.com/kim-museong/My-profile">
            <FaGithub />
          </Link>
        </div>

        <S.GoSite to="https://kim-museong.github.io/My-profile/">
          <p>사이트바로가기</p>
          <FaArrowRightToBracket />
        </S.GoSite>
      </S.ProjectTitle>

      <S.ImgListBox>{ProjectListHandler("profile", 4)}</S.ImgListBox>
    </S.ProjectWrapper>
  );
};

export default Project;
