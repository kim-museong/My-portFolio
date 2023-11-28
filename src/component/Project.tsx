import React from "react";
import * as S from "../styled/project.style";
import * as SH from "../styled/share.style";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Project: React.FC = () => {
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
      <S.ImgListBox>
        <S.ImgItem>
          <img src="images/petF1.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/petF2.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/petF3.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/petF4.png" alt="" />
        </S.ImgItem>
      </S.ImgListBox>

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

      <S.ImgListBox>
        <S.ImgItem>
          <img src="images/profile1.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/profile2.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/profile3.png" alt="" />
        </S.ImgItem>

        <S.ImgItem>
          <img src="images/profile4.png" alt="" />
        </S.ImgItem>
      </S.ImgListBox>
    </S.ProjectWrapper>
  );
};

export default Project;
