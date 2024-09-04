import * as C from "./Contacts.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";
import { Title } from "../Skills/Skills.styles";

import { MdMail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useData from "../../hooks/useData";

const Contacts = () => {
  jqueryAnimation.fadeInConatiner("#contactsContainer");

  const {themeDark} = useData();

  return (
    <C.Container id="contactsContainer">
      <Title themeDark={themeDark} >Contatos</Title>
      <C.Content>
        <C.Form action="https://formsubmit.co/diannovaisdacruz@gmail.com " method="POST">
          <h3>Entre em Contato</h3>
          <div>
            <label>
              <p>Seu email:</p>
              <input type="email" name="email" placeholder="Escreva aqui seu email de contato." required/>
              
            </label>
            <label>
              <p>Assunto:</p>
              <input type="text" name="subject" placeholder="Assunto" required/>
            </label>
            <label>
              <p>Seu nome:</p>
              <input type="text" name="name" placeholder="Nome" required />
            </label>
            <label>
              <p>Mensagem:</p>
              <textarea rows={5} name="message" placeholder="Escreva uma mensagem..." required />
            </label>
            <input type="submit" value='Enviar' />

            
            <input type="hidden" name="_next" value="/obrigado"></input>
          </div>
        </C.Form>
        <C.Info themeDark={themeDark}>
            <div>
                <MdMail/>
                <b>Email: diannovaisdacruz@gmail.com</b>
            </div>
            <div>
                <MdPhone/>
                <b>Whatsapp: 77 99111-6028</b>
            </div>

            <div>
                <FaLinkedin/>
                <b>Linkedin: <a  href="https://www.linkedin.com/in/dian-novais-3872ab22b/" target="_blank">Clique aqui.</a></b>
            </div>

            <div>
                <FaGithub/>
                <b>GitHub: <a  href="https://github.com/DianNovais" target="_blank">Clique aqui.</a></b>
            </div>
            
            
        </C.Info>
      </C.Content>
    </C.Container>
  );
};

export default Contacts;
