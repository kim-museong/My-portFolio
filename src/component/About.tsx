import React from "react";
import * as S from "../styled/about.style";
import * as SH from "../styled/share.style";

const About: React.FC = () => {
  return (
    <S.AboutWrapper>
      <SH.TitleBox>About Me</SH.TitleBox>

      <S.AboutBox>
        <div>
          <div>
            문제를 풀고자 끈기있게 노력하고 해결을 통한 성취감을 좋아합니다.
          </div>

          <div>
            사용자들이 불편함을 해결하고 더 좋은 결과물을 만들어내는 개발자가
            되고 싶습니다.
          </div>
        </div>

        <S.ProfileList>
          <S.ProfileItem>
            <S.AboutName>이름</S.AboutName>
            <S.AboutContent>김무성</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>연락처</S.AboutName>
            <S.AboutContent>010-7533-5244</S.AboutContent>
          </S.ProfileItem>

          <S.ProfileItem>
            <S.AboutName>이메일</S.AboutName>
            <S.AboutContent>antjd0419@gmail.com</S.AboutContent>
          </S.ProfileItem>
        </S.ProfileList>
      </S.AboutBox>
    </S.AboutWrapper>
  );
};

export default About;
