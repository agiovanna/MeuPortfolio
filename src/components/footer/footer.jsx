import "./footer.css";
import Imagem from "../../assets/img/img_principal.png";
import React from "react";

export function Footer(){
    return(
    <div className="footer" id="footer">
        <footer className="conteudo_footer">
            <img className="foto_principal" src={Imagem} alt="foto">
            </img>
            <div className="texto_footer">
            <h2> Giovanna Santos © Direitos Autorais</h2>
            <h2> 2023</h2>
            </div>
        </footer>
    </div>
    );
}

export default Footer;

