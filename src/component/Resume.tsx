import React from "react";
import * as S from "../styled/resume.style";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Resume: React.FC = () => {
  return (
    <S.ResumeWrapper>
      <S.ResumeTitle>Resume</S.ResumeTitle>

      <S.ResumeBox>
        <S.DataBox>
          <BsFillCalendarCheckFill />
          <p>2017.03 ~ 2020.1</p>
        </S.DataBox>

        <S.NameBox>금오공업고등학교 졸업</S.NameBox>
      </S.ResumeBox>

      <S.ResumeBox>
        <S.DataBox>
          <BsFillCalendarCheckFill />
          <p> 2023.01 ~ 2023.07</p>
        </S.DataBox>

        <S.NameBox>
          (산대특) Node.js를 활용한 백&프론트 웹 개발자 양성 과정 수료
        </S.NameBox>

        <S.DetailBox>
          <p>
            리눅스 운영체제로 수업을 진행하며 리눅스 명령어를 학습하였습니다.
          </p>
          <p>프론트엔드 기술: HTML, CSS, JavaScript, React</p>
          <p>백엔드 기술: Node.js </p>
          <p>데이터베이스: MySql</p>
          <p>Git, Github, Docker와 Aws를 학습하였습니다.</p>
        </S.DetailBox>
      </S.ResumeBox>
    </S.ResumeWrapper>
  );
};

export default Resume;
