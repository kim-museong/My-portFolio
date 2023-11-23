import styled from "styled-components";

export const Wrapper = styled.div`
  @media all and (min-width: 1024px) {
    width: 100%;
  }

  @media all and (max-width: 767px) {
    padding: 20px;
  }
`;

export const thumbnailBox = styled.div`
  background-color: rgb(55, 76, 92);
  height: 500px;
  padding-top: 150px;
  text-align: center;
`;

export const thumbnailTitle = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 7px;
`;

export const thumbnailContent = styled.div`
  margin-top: 50px;
  font-size: 20px;
  color: rgb(230, 230, 230);
`;

export const NextBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  padding: 8px 15px 8px 20px;
  border: none;
  border-radius: 20px;
`;

export const DownSvg = styled.div`
  margin-left: 5px;
  color: rgb(55, 76, 92);
  font-size: 20px;
`;
