import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-weight: bold;

  svg {
    color: black;
  }

  p {
    &.pet {
      color: rgb(255, 110, 0);
    }
  }

  .flex {
    display: flex;
    align-items: center;
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
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;

  @media all and (min-width: 1024px) {
    width: 160px;
    border-bottom: 2px solid;
    svg {
      margin-bottom: 10px;
      margin-left: 5px;
    }
  }

  @media all and (max-width: 767px) {
    width: 90px;
    border-bottom: 1px solid;
    font-size: 12px;

    svg {
      margin-bottom: 4px;
      font-size: 10px;
    }
  }
`;

export const ImgListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const ImgItem = styled.div`
  img {
    width: 400px;
    object-fit: contain;
    border: 1px solid rgb(200, 200, 200);

    @media all and (max-width: 767px) {
      width: 150px;
    }
  }
`;
