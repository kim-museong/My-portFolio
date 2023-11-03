import React from "react";
import * as S from "../styled/resume.style";
import * as SH from "../styled/share.style";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Resume: React.FC = () => {
  return (
    <SH.Wrapper>
      <SH.TitleBox>Resume</SH.TitleBox>

      <S.ResumeBox>
        <S.DataBox>
          <BsFillCalendarCheckFill />
          <p>2017.03 ~ 2020.1</p>
        </S.DataBox>

        <S.TitleBox>금오공업고등학교 졸업</S.TitleBox>
      </S.ResumeBox>

      <S.ResumeBox>
        <S.DataBox>
          <BsFillCalendarCheckFill />
          <p> 2023.01 ~ 2023.07</p>
        </S.DataBox>

        <S.TitleBox>
          (산대특) Node.js를 활용한 백&프론트 웹 개발자 양성 과정 수료
        </S.TitleBox>

        <S.DetailBox>
          <p>리눅스 운영체제로 수업을 진행하며 리눅스 명령어를 배웠습니다.</p>
          <p>프론트엔드 기술: HTML, CSS, JavaScript, React</p>
          <p>백엔드 기술: Node.js </p>
          <p>데이터베이스: MySql</p>
          <p>
            Git, Github, Docker와 Aws를 배웠습니다. 4인 프로젝트를
            진행하였습니다.
          </p>
        </S.DetailBox>
      </S.ResumeBox>
    </SH.Wrapper>
  );
};

export default Resume;
