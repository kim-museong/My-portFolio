import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  padding: 20px 40px;
  font-size: 40px;
  font-weight: bold;

  p {
    &.pet {
      color: orange;
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
  font-size: 32px;
`;

export const GoSite = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: black;

  svg {
    margin-bottom: 10px;
  }
`;

export const ImgListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 40px;
`;

export const ImgItem = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  background-image: url("/");
`;
