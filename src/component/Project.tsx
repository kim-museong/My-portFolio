import React from "react";
import * as S from "../styled/project.style";
import * as SH from "../styled/share.style";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Project: React.FC = () => {
  return (
    <SH.Wrapper>
      <SH.TitleBox>Project</SH.TitleBox>

      <S.DetailTitleBox>Team Project</S.DetailTitleBox>

      <S.ProjectTitle>
        <div className="flex">
          <p className="pet">펫프렌즈</p>
          <Link to="https://github.com/kim-museong/Pet-Friends-Project2">
            <FaGithub />
          </Link>
        </div>

        <S.GoSite to="http://docs.yi.or.kr:3002/">
          <p>사이트바로가기</p>
          <FaArrowRightToBracket />
        </S.GoSite>

        <S.ImgListBox>
          <S.ImgItem />
          <S.ImgItem />
          <S.ImgItem />
        </S.ImgListBox>
      </S.ProjectTitle>

      <S.DetailTitleBox>Toy Project</S.DetailTitleBox>
    </SH.Wrapper>
  );
};

export default Project;
