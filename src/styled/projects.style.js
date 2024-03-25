import styled from "styled-components";

export const ProjectCircleListBox = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  position: relative;

  @media all and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
  padding: 50px 0;
`;
