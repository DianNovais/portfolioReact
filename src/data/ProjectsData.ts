export type ItemProject = {
    id: number;
    title: string;
    link: string | null;
    linkGitHub: string | null;
    img: string;
    description: string;
    video?: string | null;
    technologies: string[];
    functions?: string; 
}

export const ProjectsData: ItemProject[] = [
    {
        id: 1,
        title: "Ação Gratuita - Rifas Grátis - 2022 - FrontEnd e Backend Privado",
        link: "https://acaogratuita1.netlify.app",
        linkGitHub: null,
        video: null, 
        img: "/img/projects/acao.png",
        description: "Criação de rifas digitais gratuitas, através de anúncios e patrocínios, cada usuário pode entrar e cadastrar gratuitamente, adquirir um bilhete por cada sorteio a cada 24 horas.",
        technologies: ["javascript", "mongodb", "nodejs", "react", "jwt", "express", "styled-components", "html", "recaptcha"],
        functions: "No site tem diversas funções e caracteristicas, algumas delas são, login com o google, resgate de bilhetes a cada 24 horas, recaptcha para verificação, captura de ip, diversas verificações, tela de bilhetes resgatados, esquema de moedas, referências e muito mais, tem o Painel admin incompleto, com busca do número e bilhete sorteado com info do usuário, criação de rifas e demais funções."
    },
    {
        id: 2,
        title: "DicVetores - 2025 - FrontEnd e Backend Privado",
        link: null,
        linkGitHub: null,
        video: 'https://youtu.be/3YR6zM24hFI?si=VcAKt5UBFhlkFLxu', 
        img: "/img/projects/dicvetores.png",
        description: "Site destinado a venda de vetores para corte a laser e cnc router, entrega facilidade em comprar e obter vetores. Todo projeto foi feito pensando em economizar na base do possível uma idéia de MVC. Com esse projeto foi possível melhorar mais ainda as habilidades em typescript, firebase e em lógica.",
        technologies: ["typescript", "firebase", "nodejs", "react", "express", "tailwind"],
        functions: "O site tem login com authenticate do firebase e também uso do firestore, filtro de pesquisa local na home e na sessão de vetores comprados, transações, painel admin separado do front (incompleto). O site tem potêncial para futuras atualizações como gateway de pagamento para automação, paginação e melhora no mecanismo de busca"
    }
];