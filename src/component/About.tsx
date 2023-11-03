import React from "react";
import * as S from "../styled/about.style";
import * as SH from "../styled/share.style";

const About: React.FC = () => {
  return (
    <SH.Wrapper>
      <SH.TitleBox>About Me</SH.TitleBox>

      <S.AboutBox>
        <p>안녕하세요. 신입 개발자 김무성입니다.</p>
        <p>새로운 도전을 두려워하지 않는 프론트엔드 개발자가 되겠습니다.</p>
      </S.AboutBox>
    </SH.Wrapper>
  );
};

export default About;
