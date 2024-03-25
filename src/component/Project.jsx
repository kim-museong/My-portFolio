import GithubBtnBox from "../module/project/GithubBtnBox";
import { loadImagesHandler } from "../module/loadImage";
import * as S from "../styled/project.style";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Project = ({ data }) => {
  const [showImage, setShwoImage] = useState(null);
  const locate = useLocation();

  const onClickImageHandler = (e) => {
    setShwoImage(e.target.src);
  };

  useEffect(() => {
    setShwoImage(null);
  }, [locate]);

  return (
    <>
      <S.Wrapper>
        <S.ViewImage $selectimage={showImage}>
          {!showImage && (
            <>
              이미지를 선택하여 확대해서 보세요.
              <S.UpAndDownBox>
                <FaArrowDown />
              </S.UpAndDownBox>
            </>
          )}
        </S.ViewImage>

        <S.ImageList $showiamge={showImage}>
          {loadImagesHandler(data?.imageName, 4).map((img, index) => (
            <img
              onClick={onClickImageHandler}
              src={img}
              key={index}
              alt={`프로젝트사진${++index}`}
            />
          ))}
        </S.ImageList>

        <S.Container>
          <S.ProjectTitle>{data?.name}</S.ProjectTitle>

          <GithubBtnBox url={data?.gitAddress} />

          <S.ProjectExplanation>
            <S.PeriodBox>{data?.period}</S.PeriodBox>

            <S.tagBox>
              {data?.tags.map(
                (tag) =>
                  tag && <S.ContentBox key={tag.id}>{tag.text}</S.ContentBox>
              )}
            </S.tagBox>

            <S.ExplanationBox>{data?.explanation}</S.ExplanationBox>

            {data?.reason && (
              <S.ReasonBox>
                <div className="title">선정하게 된 이유</div>
                {data?.reason}
              </S.ReasonBox>
            )}
          </S.ProjectExplanation>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Project;
