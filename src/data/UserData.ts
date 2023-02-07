type DataArray = {
  id: number;
  stars: number;
  name: string;
  svg: string;
  description: string;
};

export const Data: DataArray[] = [
  {
    id: 1,
    stars: 5,
    name: "Javascript",
    svg: "/img/javascript.svg",
    description:
      "Uma linguagem de programação de alto nível, amplamente utilizada para desenvolvimento web e outros aplicativos.",
  },
  {
    id: 2,
    stars: 4,
    name: "Typescript",
    svg: "/img/typescript.svg",
    description:
      "Uma linguagem tipada estaticamente que é construída a partir do JavaScript, adicionando definições de tipo, tornando o código mais previsível e fácil de depurar.",
  },
  {
    id: 3,
    stars: 5,
    name: "ReactJS",
    svg: "/img/react.svg",
    description:
      "Uma biblioteca JavaScript popular para criação de interfaces de usuário com base em arquitetura de componentes.",
  },
  {
    id: 4,
    stars: 4,
    name: "Bootstrap",
    svg: "/img/bootstrap.svg",
    description:
      "Uma biblioteca de front-end de código aberto popular para design de sites e aplicativos web responsivos e orientados a dispositivos móveis.",
  },
  {
    id: 5,
    stars: 5,
    name: "Styled-Components",
    svg: "/img/styled-components.svg",
    description:
      "Uma biblioteca JavaScript para escrever estilos CSS em JavaScript e aplicá-los dinamicamente a componentes no React.",
  },
  {
    id: 6,
    stars: 5,
    name: "HTML",
    svg: "/img/html.svg",
    description:
      "Linguagem de Marcação de Hipertexto, a linguagem padrão usada para criar páginas da web.",
  },
  {
    id: 7,
    stars: 5,
    name: "CSS",
    svg: "/img/css.svg",
    description:
      "Folhas de Estilo em Cascata, uma linguagem de estilos usada para descrever a aparência e formatação de um documento escrito em HTML.",
  },
  {
    id: 8,
    stars: 4,
    name: "GIT",
    svg: "/img/git.svg",
    description:
      "Um sistema de controle de versão distribuído amplamente utilizado para gerenciar e colaborar em projetos de código.",
  },
];
