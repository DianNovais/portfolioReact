import { useRef } from "react";
import * as C from "./Home.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import useData from "../../hooks/useData";

const Home = () => {
  const title = useRef<any>(null);

  jqueryAnimation.fadeInConatiner("#ContainerHome");
  jqueryAnimation.typedText(title, ["Minha História.", "Quem sou ?"]);

  const { themeDark } = useData();

  return (
    <C.Container id="ContainerHome">
      <C.Title themeDark={themeDark}>Sobre Mim</C.Title>
      <C.ContentAbout>
        <C.TextContent themeDark={themeDark}>
          <div>
            <h3 ref={title}></h3>
          </div>

          <p>
            Olá me chamo Dian e sou programador Full-Stack. Desde cedo, tenho
            uma paixão por tecnologia e estou muito empolgado nesta área. Venho
            me dedicando a muito tempo na área, buscando todos os dias praticar
            e aprender. <br></br><br></br>
            Além da área de programação, já tive a oportunidade de trabalhar em
            vários setores, incluindo vendas, atendimento em uma loja de móveis
            e aplicação de provas para o Ensino Médio, trazendo habilidades
            também de comunicação para mim. <br></br><br></br>
            Acesse minhas habilidades ou projetos e confiram algumas das minhas habilidades e vivências. Estou disposto a
            aprender qualquer outra nova tecnologia.
          </p>
        </C.TextContent>
        <C.ArtContainer>
          <a
            target="_blank"
            href="https://drive.google.com/uc?export=download&id=1s3OlUXDbzH77siJZK-YOROkCFd1PubCs"
          >
            Download CV
          </a>
        </C.ArtContainer>
      </C.ContentAbout>
    </C.Container>
  );
};

export default Home;
