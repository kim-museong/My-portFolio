import styled from "styled-components";

export const ListBox = styled.div`
  width: 70%;
  margin: 0px auto;
  padding: 30px 0 50px;
`;

export const Title = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 50px;
  text-align: center;
  letter-spacing: 4px;

  @media all and (max-width: 767px) {
    font-size: 30px;
  }
`;
