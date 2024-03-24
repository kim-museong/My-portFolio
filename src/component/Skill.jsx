import * as S from "../styled/skill.style";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiRedux,
  SiExpress,
  SiGithub,
} from "react-icons/si";

import SkillArrange from "../module/skill/SkillArrange ";

const frontEndSkillList = [
  <FaHtml5 color="orange" />,
  <FaCss3Alt color="2965f1" />,
  <SiJavascript color="f0bd4f" />,
  <FaReact color="61dbfb" />,
  <SiRedux color="764abc" />,
];
const backEndSkillList = [
  <FaNodeJs color="3c873a" />,
  <SiExpress color="black" />,
];
const DataBaseSikillList = [<SiMysql color="00758f" />];
const ToolSkillList = [<FaGitAlt color="f1502f" />, <SiGithub color="black" />];

const Skill = () => {
  const skillList = [
    {
      name: "Frontend",
      skills: frontEndSkillList,
    },
    {
      name: "Backend",
      skills: backEndSkillList,
    },
    {
      name: "Database",
      skills: DataBaseSikillList,
    },
    {
      name: "Version Control",
      skills: ToolSkillList,
    },
  ];

  return (
    <S.ListBox>
      {skillList.map((item, index) => (
        <SkillArrange key={index} array={item?.skills}>
          {item?.name}
        </SkillArrange>
      ))}
    </S.ListBox>
  );
};

export default Skill;
