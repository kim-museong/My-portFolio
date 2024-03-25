import ResumeItemBox from "../module/about/ResumeItemBox";
import { loadImagesHandler } from "../module/loadImage";
import * as S from "../styled/about.style";
import { MdSmartphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <S.Wrapper>
      <S.Title>About me</S.Title>

      <S.Content>
        <S.Image src={loadImagesHandler("my_ar_img")} alt="my-ar-img" />

        <S.Introduction>
          <p>
            <span>새로운 기술</span>과 도구를 공부하며,
          </p>

          <p>
            <span>사용자들의 니즈</span>를 이해하고 제공하는
          </p>

          <p>개발자가 되고 싶습니다.</p>
        </S.Introduction>
      </S.Content>

      <S.SubTitle>Contact</S.SubTitle>
      <S.Contact>
        <div>
          <MdSmartphone />
          <p>010-7533-5244</p>
        </div>

        <div>
          <AiOutlineMail />
          <p>antjd0419@gmail.com</p>
        </div>
      </S.Contact>

      <S.SubTitle>career</S.SubTitle>
      <S.Content>
        <S.ResumeList>
          <ResumeItemBox date="21.02.01">금오공업고등학교 졸업</ResumeItemBox>

          <ResumeItemBox date="23.07.28">
            Node.js를 활용한 백&프론트 웹 개발자 양성 6개월 과정 수료
          </ResumeItemBox>
        </S.ResumeList>
      </S.Content>
    </S.Wrapper>
  );
};

export default About;
