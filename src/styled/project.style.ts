import { Link } from "react-router-dom";
import styled from "styled-components";
import { TitleBox, Wrapper } from "./share.style";

export const ProjectWrapper = styled(Wrapper)`
  background-color: rgb(55, 76, 92);
`;

export const ProjectNameBox = styled(TitleBox)`
  color: white;
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-weight: bold;

  svg {
    color: white;
  }

  p {
    &.pet {
      color: rgb(255, 110, 0);
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media all and (min-width: 1024px) {
    margin: 50px 0;
    padding: 20px 40px;
    font-size: 40px;

    .flex {
      gap: 20px;
    }

    svg {
      margin-top: 15px;
    }
  }

  @media all and (max-width: 767px) {
    padding: 10px 15px;

    .flex {
      gap: 10px;
    }

    svg {
      margin-top: 5px;
    }
  }
`;

export const DetailTitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;

  @media all and (min-width: 1024px) {
    svg {
      font-size: 40px;
      margin-top: 30px;
      margin-right: 10px;
    }
  }

  @media all and (max-width: 767px) {
    font-size: 20px;

    svg {
      font-size: 20px;
    }
  }
`;

export const GoSite = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;

  @media all and (min-width: 1024px) {
    width: 160px;
    margin: 0 auto;
    border-bottom: 2px solid;
    svg {
      margin-bottom: 10px;
      margin-left: 5px;
    }
  }

  @media all and (max-width: 767px) {
    width: 90px;
    margin: 0 auto 20px;
    border-bottom: 1px solid;
    font-size: 12px;

    svg {
      margin-bottom: 4px;
      font-size: 10px;
    }
  }
`;

export const ImgListBox = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;

  @media all and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`;

export const ImgItem = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    border: 1px solid rgb(200, 200, 200);

    @media all and (max-width: 767px) {
      width: 150px;
      height: 75px;
    }
  }
`;
