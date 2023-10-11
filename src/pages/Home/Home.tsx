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
            Olá me chamo Dian e sou programador front-end. Desde cedo,
            tenho uma paixão por tecnologia e estou animado para trabalhar nesta
            área. Além disso, já tive a oportunidade de trabalhar em vários
            setores, incluindo vendas, atendimento em uma loja de móveis e
            aplicação de provas para o Ensino Médio. Minha jornada de
            aprendizado começou desde cedo, sempre pesquisando e estudando sobre
            assuntos relacionados à tecnologia. Atualmente, tenho conhecimento
            em <b>JAVASCRIPT, TYPESCRIPT, HTML, CSS, STYLED-COMPONENTS, BOOTSTRAP e o
            framework REACT</b>. Além disso, estou familiarizado com
            ferramentas extras como Git, Github e FTP FileZila. Além das
            habilidades técnicas, também valorizo minhas habilidades
            interpessoais, como boa comunicação, paciência, persistência e
            organização. Já realizei diversos projetos utilizando as tecnologias
            mencionadas acima, todos disponíveis no meu <a target="_blank" href="https://github.com/DianNovais">Github</a>, e estou sempre
            procurando aprender mais e expandir meus conhecimentos. Minhas metas
            profissionais a curto prazo incluem continuar estudando e aprendendo
            cada vez mais, agora realizando estudos em Análise e Desenvolvimento
            de Sistemas. No longo prazo, desejo ser reconhecido como um
            profissional Full-Stack competente e inovador na minha área de
            atuação.
          </p>
        </C.TextContent>
        <C.ArtContainer>
          <a target='_blank' href="https://drive.google.com/uc?export=download&id=1-12uOaM7plDNBYh1hUdQxq1FMtliXw6O">Download CV</a>
        </C.ArtContainer>
      </C.ContentAbout>
    </C.Container>
  );
};

export default Home;
