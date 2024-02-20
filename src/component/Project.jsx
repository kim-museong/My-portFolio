import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../styled/project.style";
import { palette } from "../styled/colorPalette";
import Layout from "./Layout";
import CircleImageBox from "../module/project/CircleImageBox";
import ProjectItem from "./ProjectItem";
import projectList from "../projectList.json";
import { loadImagesHandler } from "../module/loadImage";

const Project = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const projects = [
    {
      name: "펫프렌즈",
      imgurl: loadImagesHandler("petFriends_logo"),
      borderColor: palette.projectColor,
      href: "petFriends",
    },
    {
      name: "나만의 포트폴리오",
      imgurl: loadImagesHandler("portFolio_logo"),
      borderColor: palette.blue[1],
      href: "portFolio",
    },
  ];

  useEffect(() => {
    setData(projectList[params.projectName]);
  }, [params]);

  return (
    <Layout title="Project">
      <div>
        <S.ProjectCircleListBox>
          {/* 원모양 프로젝트 버튼 */}
          {projects.map((project, index) => (
            <li key={index}>
              <CircleImageBox
                imgurl={project.imgurl}
                borderColor={project.borderColor}
                href={project.href}
              >
                {project.name}
              </CircleImageBox>
            </li>
          ))}
        </S.ProjectCircleListBox>
      </div>

      {params.projectName && <ProjectItem data={data} />}
    </Layout>
  );
};

export default Project;
