import styled from "styled-components";

export const SkillListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 50px 0;
  font-size: 100px;

  @media all and (max-width: 767px) {
    font-size: 50px;
    gap: 10px;
    margin: 10px 0 30px;
  }
`;
