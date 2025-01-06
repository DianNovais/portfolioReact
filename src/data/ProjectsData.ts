export type ItemProject = {
    id: number;
    title: string;
    link: string;
    linkGitHub: string;
    img: string;
    description: string;
}

export const ProjectsData: ItemProject[] = [
    {
        id: 8,
        title: "Gerenciador de Estoque - FrontEnd - em breve video e readme",
        link: "",
        linkGitHub: "https://github.com/DianNovais/gerenciador-de-estoque-front",
        img: "/img/projects/gerenciadorfront.png",
        description: "Gerencie seu estoque com essa software junto com o backend do mesmo dispónivel também no meu github, tecnologia usada, React, Typescript, Victory, autentificação jwt, criptografia, banco de dados cloud MongoDB atlas, NodeJs e muitas outras para melhor eficiência e segurança. Possível diversas melhorias futuras.",
    },
    {
        id: 7,
        title: "Veja o Repositório do Portfólio",
        link: "",
        linkGitHub: "https://github.com/DianNovais/portfolioReact",
        img: "/img/projects/portfolio.png",
        description: "Responsivo - Novo portfólio feito com React e suas bibliotecas, também Typescript, Styled-Components... Possíveis futuras melhorias.",
    },
    {
        id: 6,
        title: "Gerenciador de Estoque - Backend - github e documentação",
        link: "",
        linkGitHub: "https://github.com/DianNovais/gerenciador-de-estoque-backend",
        img: "/img/projects/gerenciadorback.png",
        description: "Gerencie seu estoque com essa API restFull, com autentificação jwt, criptografia, banco de dados cloud MongoDB atlas, NodeJs e muitas outras para melhor eficiência e segurança. Possível diversas melhorias futuras.",
    },
    {
        id: 0,
        title: "Ação Gratuita - Rifas Grátis - Git Privado",
        link: "https://acaogratuita1.netlify.app",
        linkGitHub: "",
        img: "/img/projects/acao.png",
        description: " (Responsivo, Front em versão de teste), Site feito com diversos tipos de tecnologias no frontend e no backend, como autentificação, criptografia, jwt, banco de dados cloud, API NodeJs, React e muitas outras para melhor eficiência e segurança.",
    },
    {
        id: 1,
        title: "Coin da Disciplina",
        link: "https://coindadisciplina.netlify.app",
        linkGitHub: "https://github.com/DianNovais/coin_da_disciplina/",
        img: "/img/projects/coindadisciplina.png",
        description: " (Responsivo, Futuras atualizações em dev) Gerencie seu tempo gastando e ganhando Coin da Disciplina. App feito para gerenciar seu tempo, ganhe por tarefas difíceis e gaste com diversão. [HTML, CSS, JAVASCRIPT, ReactJs + Vite, LocalStorage]",
    },
    {
        id: 2,
        title: "Gerador Mega-Sena.",
        link: "https://gereaqui-megasena.netlify.app",
        linkGitHub: "https://github.com/DianNovais/gereaqui-megasena",
        img: "/img/projects/gereaqui.png",
        description: " (Responsivo) Gerador de números que mais sairam nos ultimos concurso da mega-sena.[HTML, CSS, Javascript, BootStrap, e Fetch para consumir a API das lotérias.]",
    },
    {
        id: 3,
        title: "DiDeveloper",
        link: "https://dideveloper.netlify.app/",
        linkGitHub: "#",
        img: "/img/projects/didev.png",
        description: " (Responsivo) Site onde reunir alguns templates que fiz.[Reactjs, react-router-dom, LocalStorage, HTML, CSS, Javascript]",
    },
    {
        id: 4,
        title: "Estacionamento Local",
        link: "https://github.com/DianNovais/parkingmanage",
        linkGitHub: "https://github.com/DianNovais/parkingmanage",
        img: "/img/projects/estacionamento.png",
        description: " (Ainda não responsivo) Gerencie varios estacionamento em sua máquina local. [Reactjs, API-Context, LocalStorage, HTML, CSS, Javascript]",
    },
    {
        id: 5,
        title: "Notes Online",
        link: "#",
        linkGitHub: "https://github.com/DianNovais/mynotesonline",
        img: "/img/projects/notesimg.png",
        description: "(Resposivo e DESATIVADO pelo banco de dados). [Reactjs, HTML, CSS, Javascript, consumo de API com Axios, Express, Node.js, MongoDB.]",
    },
];