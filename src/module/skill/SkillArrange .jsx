import styled, { keyframes } from "styled-components";

export const scaleUp = keyframes`
  0%{
    transform: scale(0.1);
  }
  100%{
    transform: scale(1);
  }
`;

export const SkillName = styled.div`
  text-align: center;
  font-size: 25px;
  color: white;
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  font-size: 50px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  animation: ${scaleUp} 0.3s ease-out forwards;
`;

/** 스킬별 박스 나열하기 ( 스킬배열 ) */
const SkillArrange = ({ array, children }) => {
  return (
    <div>
      <SkillName>{children}</SkillName>

      <SkillsBox>
        {array?.map((icon, index) => (
          <IconBox key={index}>{icon}</IconBox>
        ))}
      </SkillsBox>
    </div>
  );
};

export default SkillArrange;
