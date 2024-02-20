import ResumeItemBox from "../module/about/ResumeItemBox";
import * as S from "../styled/about.style";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout title="introduce">
      <S.AboutBox>
        <S.AboutContentBox>
          <S.AboutTagBox>
            <li>노력</li>
            <li>신중</li>
          </S.AboutTagBox>

          <p>
            <span>새로운 기술</span>과 도구를 공부하며,
          </p>

          <p>
            <span>사용자들의 니즈</span>를 이해하고 제공하는
          </p>

          <p>개발자가 되겠습니다.</p>
        </S.AboutContentBox>

        <S.ResumeListBox>
          <ResumeItemBox date="21.02.01">금오공업고등학교 졸업</ResumeItemBox>

          <ResumeItemBox date="23.07.28">
            Node.js를 활용한 백&프론트 웹 개발자 양성 6개월 과정 수료
          </ResumeItemBox>
        </S.ResumeListBox>
      </S.AboutBox>
    </Layout>
  );
};

export default About;
