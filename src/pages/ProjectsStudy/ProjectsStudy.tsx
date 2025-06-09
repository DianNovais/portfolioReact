import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { ProjectsStudyData } from "../../data/ProjectsStudyData";

import { Title } from "../Skills/Skills.styles";
import * as C from "../Projects/Projects.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import useData from "../../hooks/useData";

const ProjectsStudy = () => {
  jqueryAnimation.fadeInConatiner("#projectsContainer");

  const { themeDark } = useData();

  return (
    <C.Container >
      <C.ContentProjects >
        <Title themeDark={themeDark}>Projetos de Estudos</Title>
        <C.ItemsContainer>
          {ProjectsStudyData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.title}
              link={item.link}
              linkGitHub={item.linkGitHub}
              img={item.img}
              description={item.description}
              technologies={item.technologies}
              functions={item.functions}
            />
          ))}
        </C.ItemsContainer>
      </C.ContentProjects>
    </C.Container>
  );
};

export default ProjectsStudy;
