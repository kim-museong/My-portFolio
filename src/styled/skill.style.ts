import styled from "styled-components";

export const SkillWrapper = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 50px auto;

  div:nth-child(1) {
    grid-column: 1 / span 3;
  }

  @media all and (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 50px;
    gap: 20px;
    margin: 10px 0 30px;
  }
`;

export const MainSkillList = styled.div`
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-out;
  background-color: rgb(240, 247, 249);
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media all and (max-width: 767px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const MainSkillName = styled.div`
  text-align: center;
  font-size: 32px;

  @media all and (max-width: 767px) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  padding: 20px;
  font-size: 70px;

  @media all and (max-width: 767px) {
    flex-wrap: wrap;
    font-size: 40px;
  }
`;
