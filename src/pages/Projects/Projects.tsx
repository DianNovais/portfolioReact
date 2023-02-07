import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { ProjectsData } from "../../data/ProjectsData";

import { Title } from "../Skills/Skills.styles";
import * as C from "./Projects.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import useData from "../../hooks/useData";

const Projects = () => {
  
  jqueryAnimation.fadeInConatiner("#projectsContainer");

  const {themeDark} = useData();

  return (
    <C.Container id="projectsContainer">
      <Title themeDark={themeDark}>Projetos</Title>
      <C.ItemsContainer>
        {ProjectsData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.title}
            link={item.link}
            linkGitHub={item.linkGitHub}
            img={item.img}
            description={item.description}
          />
        ))}
      </C.ItemsContainer>
    </C.Container>
  );
};

export default Projects;
