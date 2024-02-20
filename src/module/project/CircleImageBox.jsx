import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  width: 120px;
  height: 120px;
  line-height: 60px;
  background: ${({ bordercolor = "black", isclick }) =>
    isclick === "true"
      ? `linear-gradient(to right, ${bordercolor}, white)`
      : "#444"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SubBox = styled.div`
  background-color: black;
  width: 113px;
  height: 113px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 103px;
  height: 103px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url(${({ imgurl }) => imgurl});
  background-color: white;
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50% 50%;
`;

const NameBox = styled.div`
  text-align: center;
  margin-top: 5px;
  color: white;
  font-size: 12px;
`;

/** 프로젝트 이미지버튼생성 ( 이미지주소, 테두리색상, 프로젝트이름, 이동주소 )  */
const CircleImageBox = ({ imgurl, borderColor, children, href }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  const moveProjectPageHandler = useCallback(
    (href) => {
      navigate(`/project/${href}`);
    },
    [navigate]
  );

  useEffect(() => {
    location.pathname.includes(href) ? setIsClick(true) : setIsClick(false);
  }, [location, setIsClick, href]);

  return (
    <>
      <MainBox
        bordercolor={borderColor}
        onClick={() => moveProjectPageHandler(href)}
        isclick={String(isClick)}
      >
        <SubBox>
          <ImageBox imgurl={imgurl} />
        </SubBox>
      </MainBox>
      <NameBox>{children}</NameBox>
    </>
  );
};

export default CircleImageBox;
