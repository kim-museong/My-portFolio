import React from "react";
import { Element } from "react-scroll";
import About from "./About";
import Resume from "./Resume";
import Skill from "./Skill";
import Project from "./Project";
import * as S from "../styled/main.style";

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.SpaceBlock />
      <div>
        <Element name="about">
          <About />
        </Element>

        <Element name="resume">
          <Resume />
        </Element>

        <Element name="skill">
          <Skill />
        </Element>

        <Element name="project">
          <Project />
        </Element>
      </div>
    </S.Wrapper>
  );
};

export default Main;
