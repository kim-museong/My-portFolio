import React from "react";
import styled from "styled-components";
import { palette } from "../../styled/colorPalette";

const Container = styled.div`
  height: 100px;
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  /* 모바일 */
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;

const ActionBox = styled.div`
  position: absolute;
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
  color: black;
  font-weight: 500;
  padding: 3px 12px;
  padding-right: 15px;
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
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    height: 20px;
    font-size: 12px;
    padding: 3px 7px;

    &::after {
      width: 13.8px;
      height: 13.8px;
      top: 0.9px;
    }
  }
`;

const ContentBox = styled.div`
  font-weight: 500;
  height: 100%;
  font-size: 18px;

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 150px;
  }
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

  /* 모바일 */
  @media screen and (max-width: 767px) {
    font-size: 12px;

    &::before {
      width: 15px;
      height: 15px;
    }
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

          <ContentBox>{children}</ContentBox>
        </ActionBox>
      </Wrapper>
    </Container>
  );
};

export default ResumeItemBox;
