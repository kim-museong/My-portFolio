import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";

const Wrapper = styled(Link)`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 30px;
  color: white;
`;

/** github이동버튼 ( 이동할 주소 ) */
const GithubBtnBox = ({ url }) => {
  return (
    <>
      <Wrapper to={url} target="_blank">
        <SiGithub />
      </Wrapper>
    </>
  );
};

export default GithubBtnBox;
