import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import About from "./About";
import Resume from "./Resume";
import Skill from "./Skill";
import Project from "./Project";
import * as S from "../styled/main.style";
import { init, setPosition } from "../reduce/action";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const aboutLocationRef = useRef<any>(null);
  const resumeLocationRef = useRef<any>(null);
  const skillLocationRef = useRef<any>(null);

  useEffect(() => {
    dispatch(init());

    const about = aboutLocationRef.current?.getBoundingClientRect().top;
    const resume = resumeLocationRef.current?.getBoundingClientRect().top;
    const skill = skillLocationRef.current?.getBoundingClientRect().top;

    dispatch(setPosition(about, resume, skill));
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.SpaceBlock />
      <div>
        <Element name="about">
          <About />
        </Element>
        <div ref={aboutLocationRef} />

        <Element name="resume">
          <Resume />
        </Element>
        <div ref={resumeLocationRef} />

        <Element name="skill">
          <Skill />
        </Element>
        <div ref={skillLocationRef} />

        <Element name="project">
          <Project />
        </Element>
      </div>
    </S.Wrapper>
  );
};

export default Main;
