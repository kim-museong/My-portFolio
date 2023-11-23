import styled from "styled-components";

export const AboutBox = styled.div`
  text-align: center;

  @media all and (min-width: 1024px) {
    font-size: 32px;
    margin-bottom: 50px;
    padding: 20px;
  }
  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const ProfileList = styled.ul`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 3px solid rgb(55, 76, 92);
  border-radius: 10px;
  padding: 20px;
`;

export const AboutName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const AboutContent = styled.div`
  font-size: 16px;
  color: rgb(150, 150, 150);
`;
