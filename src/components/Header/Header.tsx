import * as C from "./Header.styles";

import {
  MdPersonPin,
  MdAccountTree,
  MdCode,
  MdCheckCircle,
  MdContacts,
} from "react-icons/md";

import { Link } from "react-router-dom";

import useData from "../../hooks/useData";



const Header = () => {

  const {themeDark} = useData();

  return (
    <C.Container themeDark={themeDark}>
      {/* Perfil photo */}
      <C.ProfileImage>
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
          to="/"
        >
          <C.GroupProfile>
            <img src="/img/imageProfile.jpeg" alt="profile image" />
            <C.TitleOrganity themeDark={themeDark}>
                <h1>Dian Novais</h1>
                <h2>Desenvolvedor</h2>
            </C.TitleOrganity>
            
          </C.GroupProfile>
        </Link>
      </C.ProfileImage>

      <C.ListOptions>
        <ul>
          <C.LinkElem to="/">
            <MdPersonPin></MdPersonPin>
            <span>Sobre Mim</span>
          </C.LinkElem>

          <C.LinkElem to="/skills">
            <MdAccountTree></MdAccountTree>
            <span>Minhas Habilidades</span>
          </C.LinkElem>

          <C.LinkElem to="/project">
            <MdCode></MdCode>
            <span>Meus Projetos</span>
          </C.LinkElem>

          <C.LinkElem to="/qualifications">
            <MdCheckCircle></MdCheckCircle>
            <span>Capacitações</span>
          </C.LinkElem>

          <C.LinkElem to="/contacts">
            <MdContacts></MdContacts>
            <span>Contatos</span>
          </C.LinkElem>
        </ul>
      </C.ListOptions>
      <C.Copy themeDark={themeDark}>
          <p>Copyright © Dian 2024 </p>
      </C.Copy>
    </C.Container>
  );
};


export default Header;
