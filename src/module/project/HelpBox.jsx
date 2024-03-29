import styled, { keyframes } from "styled-components";
import { TbHandFinger } from "react-icons/tb";

const degMovement = keyframes`
    0%, 100% {
    transform: translateY(0) translateX(0);
    }
    50% {
    transform: translateY(10px) translateX(10px);
    }
`;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: -110px;
  text-align: center;

  p {
    display: inline-block;
    border: 1px solid white;
    border-radius: 10px;
    padding: 8px 15px;
  }

  @media all and (max-width: 767px) {
    top: -30px;
    left: -65px;

    p {
      font-size: 12px;
    }
  }
`;

const Arrow = styled(TbHandFinger)`
  font-size: 30px;
  transform: rotate(135deg);
  margin-top: 20px;

  @media all and (max-width: 767px) {
    font-size: 20px;
  }
`;

const ArrowBox = styled.div`
  animation: ${degMovement} 1s ease-in-out infinite;

  @media all and (max-width: 767px) {
    margin-right: 135px;
  }
`;

const HelpBox = () => {
  return (
    <Wrapper>
      <p>클릭하여 프로젝트을 열람하세요!</p>

      <ArrowBox>
        <Arrow />
      </ArrowBox>
    </Wrapper>
  );
};

export default HelpBox;
