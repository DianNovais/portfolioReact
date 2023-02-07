import { Title } from "../Skills/Skills.styles";
import * as C from "./Qualifications.styles";

import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import QualificationsItems from "../../components/QualificationsItems/QualificationsItems";
import useData from "../../hooks/useData";

const Qualifications = () => {
  jqueryAnimation.fadeInConatiner("#qualificationsContainer");

  const {themeDark} = useData();

  return (
    <C.Container id="qualificationsContainer">
      <Title themeDark={themeDark}>Capacitações</Title>
      <C.Info>°Para mais informações faça download do meu cv em SOBRE MIM.</C.Info>
      <C.Info>°Algumas capacitações com certificações abaixo, capacitações sem certificações não apareceram aqui, para ver mais habilidades, vá a sessão HABILIDADES.</C.Info>

      <C.ItemsContainer>
        <QualificationsItems
          title="Analise e Desenvolvimento de Sistemas"
          status="Cursando o superior no momento"
          un="UNOPAR"
        />
        <QualificationsItems
          title="ReactJs (Redux, Api context, Hooks, Javascript ES6, NodeJS, TypeScript...)"
          status="08/2022 - 10/2022"
          un="UDEMY"
        />
        <QualificationsItems
          title="Curso Técnico em Administrador Banco de Dados"
          status="11/2021 - 02/2022"
          un="SENAC"
        />
      </C.ItemsContainer>
    </C.Container>
  );
};

export default Qualifications;
