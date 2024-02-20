import React from "react";
import styled, { keyframes } from "styled-components";
import { palette } from "../../styled/colorPalette";

const sildeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);

  }

  50% {    
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const ActionBox = styled.div`
  position: absolute;
  animation: ${sildeDown} 0.8s ease forwards;
  display: flex;
  align-items: center;
  gap: 10px;
  height: auto;
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 35px;
  background-color: ${palette.blue[1]};
  color: ${palette.backgroundColor};
  font-weight: 500;
  padding: 3px 12px;
  margin-right: 15px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-50%, 19%) rotate(45deg);
    width: 24.9px;
    height: 24.9px;
    background-color: ${palette.blue[1]};
    z-index: -1;
  }
`;

const ContentBox = styled.div`
  font-weight: 500;
  height: 100%;
  font-size: 18px;
`;

const CenterLineBox = styled.div`
  margin: 0 20px;
  position: relative;

  &::before {
    content: "";
    background-color: ${palette.blue[0]};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 3px;
    height: 100px;
    background-color: ${palette.blue[0]};
  }
`;

/** 학력 및 대외활동 아이템박스 ( 날짜, 소개이름 ) */
const ResumeItemBox = ({ date, children }) => {
  return (
    <Container>
      <Wrapper>
        <ActionBox>
          <DateBox>{date}</DateBox>

          <CenterLineBox />

          <ContentBox style={children?.length > 20 ? { fontSize: "16px" } : {}}>
            {children}
          </ContentBox>
        </ActionBox>
      </Wrapper>
    </Container>
  );
};

export default ResumeItemBox;
