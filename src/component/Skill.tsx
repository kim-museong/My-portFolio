import React from "react";
import * as SH from "../styled/share.style";
import * as S from "../styled/skill.style";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiRedux,
  SiExpress,
} from "react-icons/si";

const Skill: React.FC = () => {
  return (
    <SH.Wrapper>
      <SH.TitleBox>Skill</SH.TitleBox>

      <S.SkillListBox>
        <FaHtml5 color="orange" />
        <FaCss3Alt color="2965f1" />
        <SiJavascript color="f0bd4f" />
        <SiTypescript color="007acc" />
        <FaNodeJs color="3c873a" />
        <SiExpress color="black" />
        <FaReact color="61dbfb" />
        <SiRedux color="764abc" />
        <SiMysql color="00758f" />
        <FaGitAlt color="f1502f" />
        <FaGithub color="black" />
      </S.SkillListBox>
    </SH.Wrapper>
  );
};

export default Skill;
