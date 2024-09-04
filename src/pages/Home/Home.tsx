import { useRef } from "react";
import * as C from "./Home.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import useData from "../../hooks/useData";

const Home = () => {
  const title = useRef<any>(null);

  jqueryAnimation.fadeInConatiner("#ContainerHome");
  jqueryAnimation.typedText(title, ["Minha História.", "Quem sou ?"]);

  const {themeDark} = useData();

  return (
    <C.Container id="ContainerHome">
      <C.Title themeDark={themeDark}>Sobre Mim</C.Title>
      <C.ContentAbout>
        <C.TextContent themeDark={themeDark}>
          <div>
            <h3 ref={title}></h3>
          </div>

          <p>
            Olá me chamo Dian e sou programador Full-Stack. Desde cedo,
            tenho uma paixão por tecnologia e estou muito empolgado atuando nesta
            área. Além da área de programação, já tive a oportunidade de trabalhar em vários
            setores, incluindo vendas, atendimento em uma loja de móveis e
            aplicação de provas para o Ensino Médio, trazendo habilidades também de comunicação para mim. Minha jornada de
            aprendizado começou desde cedo, sempre pesquisando e estudando sobre
            assuntos relacionados à tecnologia. Atualmente, tenho conhecimento
            em diversas tecnólogias<b>(confira na página de minhas habibilidades)</b>. Além das
            habilidades técnicas, também valorizo minhas habilidades
            interpessoais, como boa comunicação, paciência, persistência e
            organização. Já realizei diversos projetos utilizando as tecnologias
            mencionadas na página de habilidades, todos disponíveis no meu <a target="_blank" href="https://github.com/DianNovais">Github</a>, estou sempre
            procurando aprender mais e expandir meus conhecimentos. Minhas metas
            profissionais a curto prazo incluem continuar estudando e aprendendo
            cada vez mais, agora realizando estudos em Análise e Desenvolvimento
            de Sistemas, cursos, e em diversos lugares como documentações, foruns e em todo lugar da internet. A longo prazo, desejo ser reconhecido como um
            profissional Full-Stack extremamente competente e inovador na minha área de
            atuação. Afinal minha pessoa é querer buscar sempre conhecer mais, com dom de aprender tecnologias.
          </p>
        </C.TextContent>
        <C.ArtContainer>
          <a target='_blank' href="https://drive.google.com/uc?export=download&id=1s3OlUXDbzH77siJZK-YOROkCFd1PubCs">Download CV</a>
        </C.ArtContainer>
      </C.ContentAbout>
    </C.Container>
  );
};

export default Home;
