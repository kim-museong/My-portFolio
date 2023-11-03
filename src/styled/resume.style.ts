import styled from "styled-components";

export const ResumeBox = styled.div`
  padding: 30px;
  font-size: 32px;
`;

export const DataBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

  p {
    margin-left: 10px;
  }

  svg {
    color: red;
  }
`;

export const TitleBox = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailBox = styled.div`
  display: inline-block;
  font-size: 25px;
  padding: 30px 50px;
  border: 4px solid black;
  border-radius: 20px;
`;
