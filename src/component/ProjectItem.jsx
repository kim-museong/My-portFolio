import { styled, keyframes } from "styled-components";
import GithubBtnBox from "../module/project/GithubBtnBox";
import { loadImagesHandler } from "../module/loadImage";
import * as S from "../styled/projectItem.style";

const showBox = keyframes`
  0% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 50px auto;
  padding-bottom: 100px;
  animation: ${showBox} 0.5s;
  letter-spacing: 1px;
`;

const ProejctImgListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid white;

    &:active {
      position: absolute;
    }
  }
`;

const ProjectImgBox = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
`;

const ProjectExplanation = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 20px 0;
`;

const Container = styled.div`
  margin: 15px 0;
  color: white;

  .fontUp {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const ContentBox = styled.div`
  background-color: white;
  border-radius: 50px;
  color: black;
  padding: 8px 15px;
  text-align: center;
  font-size: 14px;
`;

const ProjectItem = ({ data }) => {
  return (
    <>
      <Wrapper>
        <ProjectImgBox>
          <ProejctImgListBox>
            {loadImagesHandler(data?.imageName, 4).map((img, index) => (
              <img src={img} key={index} alt={`프로젝트사진${++index}`} />
            ))}
          </ProejctImgListBox>
        </ProjectImgBox>

        <Container>
          <S.ProjectTitle>{data?.name}</S.ProjectTitle>

          <GithubBtnBox url={data?.gitAddress} />

          <ProjectExplanation>
            <S.PeriodBox>{data?.period}</S.PeriodBox>

            <S.tagBox>
              {data?.tags.map(
                (tag) => tag && <ContentBox key={tag.id}>{tag.text}</ContentBox>
              )}
            </S.tagBox>

            <S.ExplanationBox>{data?.explanation}</S.ExplanationBox>

            {data?.reason && (
              <S.ReasonBox>
                <div className="title">선정하게 된 이유</div>
                {data?.reason}
              </S.ReasonBox>
            )}
          </ProjectExplanation>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProjectItem;
