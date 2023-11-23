import React from "react";
import * as S from "../styled/about.style";
import * as SH from "../styled/share.style";

const About: React.FC = () => {
  return (
    <SH.Wrapper>
      <SH.TitleBox>About Me</SH.TitleBox>

      <S.AboutBox>
        <S.ProfileList>
          <S.ProfileItem>
            <S.AboutName>이름</S.AboutName>
            <S.AboutContent>김무성</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>생년월일</S.AboutName>
            <S.AboutContent>01.04.19</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>연락처</S.AboutName>
            <S.AboutContent>010-7533-5244</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>이메일</S.AboutName>
            <S.AboutContent>antjd0419@gmail.com</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>주소</S.AboutName>
            <S.AboutContent>대구</S.AboutContent>
          </S.ProfileItem>
        </S.ProfileList>
      </S.AboutBox>
    </SH.Wrapper>
  );
};

export default About;
