import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px 0;
  padding: 20px 40px;
  font-size: 40px;
  font-weight: bold;

  p {
    &.pet {
      color: rgb(255, 110, 0);
    }
  }

  svg {
    margin-top: 15px;
    color: black;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const DetailTitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;

  svg {
    font-size: 40px;
    margin-right: 10px;
  }
`;

export const GoSite = styled(Link)`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  border-bottom: 2px solid;

  svg {
    margin-bottom: 10px;
    margin-left: 5px;
  }
`;

export const ImgListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const ImgItem = styled.div`
  img {
    width: 400px;
    object-fit: contain;
    border: 1px solid rgb(200, 200, 200);
  }
`;
