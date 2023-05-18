import {SiGithub, SiInstagram, SiLinkedin} from "react-icons/si";
import {FaFileDownload} from "react-icons/fa"
import "./redes_sociais.css";
import Curriculo from "../../assets/curriculo_giovanna.pdf";

// Criando e importando os icones que ficará na parte de informações
function RedesSociais(){
    return(
        <div className="icones_redes_sociais">
            <a href="https://www.instagram.com/a_giovannaa" > <SiInstagram size={32} /> </a>
            <a href="https://www.linkedin.com/in/agiovanwna-s-814a88256/"> <SiLinkedin size={32}/> </a>
            <a href="https://github.com/agiovanna"> <SiGithub size={32}/> </a>
            <a href={Curriculo} download='' title="Baixar Currículo"> <FaFileDownload size= {32}/></a>
        </div>
    );
}

export default RedesSociais;