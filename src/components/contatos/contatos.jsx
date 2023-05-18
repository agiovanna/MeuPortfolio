import "./contatos.css";
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import Curriculo from "../../assets/curriculo_giovanna.pdf";

export function Contatos() {
  return (
    <div className="contatos" id='contatos'>
      <div className="conteudo_contatos">
        <h1> CONTATOS </h1>
        <br></br>
        <div className="icones_contato">
          <div className="icones_separados">
          <a href="https://www.instagram.com/a_giovannaa"><SiInstagram /></a>
          <h2> <a href="https://www.instagram.com/a_giovannaa"> @a_giovannaa </a></h2>
          </div>
          <div className="icones_separados">
          <a href="https://www.linkedin.com/in/agiovanwna-s-814a88256/"> <SiLinkedin /> </a>
          <h2> <a href="https://www.linkedin.com/in/agiovanwna-s-814a88256/"> Giovanna Santos </a></h2>
          </div>
          <div className="icones_separados"> 
          <a href="mailto:giovanna.17g@gmail.com"> <SiGmail /></a>
          <h2> <a href="mailto:giovanna.17g@gmail.com" > giovanna.17g@gmail.com</a></h2>
          </div>
        </div>
        <br></br> <br></br> <br></br>

        <button className="baixar_cv" download='' > <a className="" href={Curriculo}> Baixar currículo </a></button>
      </div>
    </div>
  );
}

export default Contatos;
