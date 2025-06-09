import { ItemProject } from "./ProjectsData";


export const ProjectsStudyData: ItemProject[] = [
    {
        id: 8,
        title: "Gerenciador de Estoque - FrontEnd - código Público",
        link: "",
        video: null,
        linkGitHub: "https://github.com/DianNovais/gerenciador-de-estoque-front",
        technologies: ["typescript", "react", "victory", "jwt", "styled-components", "html"],
        img: "/img/projects/gerenciadorfront.png",
        description: "Gerenciador de estoque incompleto(estou desenvolvendo um com mais funcionalidades). Treinamento de lógica, e também primeiro contato e aprendizado com a lib de gráficos victory",
        functions: "Contém autenticação com jwt, criptografia de senhas, calculo simples financeiro, gráficos, adição e remoção de produtos, carrinho de compras"
    },
    {
        id: 6,
        title: "Gerenciador de Estoque - Backend - github e documentação",
        technologies: ["typescript", "mongodb", "nodejs", "jwt", "express"],
        link: "",
        linkGitHub: "https://github.com/DianNovais/gerenciador-de-estoque-backend",
        img: "/img/projects/gerenciadorback.png",
        description: "Api do gerenciador de estoque, com autentificação jwt, criptografia, banco de dados cloud MongoDB atlas, NodeJs e muitas outras para melhor eficiência e segurança. Possível diversas melhorias futuras.",
        functions: "Contém autenticação com jwt, criptografia de senhas, calculo simples financeiro, gráficos, adição e remoção de produtos, carrinho de compras"
    },
    {
        id: 7,
        title: "Veja o Repositório do Portfólio",
        technologies: ["typescript", "react", "styled-components", "html"],
        link: "",
        linkGitHub: "https://github.com/DianNovais/portfolioReact",
        video: null,
        img: "/img/projects/portfolio.png",
        description: "Aqui mostro minhas habilidades, projetos e tecnologias. Também usei para aprimorar minhas habilidades. Primeiro contato com typescript foi aqui no próprio portfólio",
        functions: "Menu separando páginas, roteamento, tema escuro e claro, exibição de informações sobre mim em cards"
    },
    {
        id: 1,
        title: "Coin da Disciplina",
        link: "https://coindadisciplina.netlify.app",
        linkGitHub: "https://github.com/DianNovais/coin_da_disciplina/",
        video: null,
        technologies: ['javascript', 'react', 'css', 'html'],
        img: "/img/projects/coindadisciplina.png",
        description: " Gerencie seu tempo gastando e ganhando Coin da Disciplina. App feito para gerenciar seu tempo, ganhe por tarefas difíceis e gaste com diversão. [HTML, CSS, JAVASCRIPT, ReactJs + Vite, LocalStorage]",
        functions: "adicionar tarefa e diversão com tempo e ganhos de moedas, remoção de tarefa e diversão, salva as informações no localstorage"
    },
    {
        id: 2,
        title: "Gerador Mega-Sena.",
        link: "https://gereaqui-megasena.netlify.app",
        linkGitHub: "https://github.com/DianNovais/gereaqui-megasena",
        video: null,
        technologies: ["javascript", "html", "bootstrap"],
        img: "/img/projects/gereaqui.png",
        description: " (Responsivo) Gerador de números que mais sairam nos ultimos concurso da mega-sena.[HTML, CSS, Javascript, BootStrap, e Fetch para consumir a API das lotérias.]",
        functions: "Comunicação com api da lotéria, cálculo e exibição dos números mais sorteados"
    },
    {
        id: 4,
        title: "Estacionamento Local",
        technologies: ["javascript", "react", "css", "html"],
        link: null,
        linkGitHub: "https://github.com/DianNovais/parkingmanage",
        img: "/img/projects/estacionamento.png",
        description: " (Ainda não responsivo) Gerencie varios estacionamento em sua máquina local. [Reactjs, API-Context, LocalStorage, HTML, CSS, Javascript]",
        functions: "Adicionar varios estacionamentos com nome e vagas, definir quantidade de vagas, lista de vagas livres e ocupadas, e adicionar ou liberar veiculo em cada vaga"
    },
    {
        id: 5,
        title: "Notes Online",
        technologies: ["javascript", "react", "mongodb", "nodejs", "express", "html", "css"],
        link: null,
        linkGitHub: "https://github.com/DianNovais/mynotesonline",
        img: "/img/projects/notesimg.png",
        description: "(Resposivo e DESATIVADO pelo banco de dados). [Reactjs, HTML, CSS, Javascript, consumo de API com Axios, Express, Node.js, MongoDB.]",
        functions: "Adicionar notas, modificar e deletar"
    }
];