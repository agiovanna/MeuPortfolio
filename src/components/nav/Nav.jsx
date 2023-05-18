import React from "react";
import './nav.css';

function Nav(){
    return (
        <nav>
      <ul>
      <li> <a href="#home"> Home </a></li>
        <li> <a href="#sobremim"> Sobre mim </a></li>
        <li> <a href="#projetos"> Projetos </a></li>
        <li> <a href="#habilidades"> Habilidades </a></li>
        <li> <a href="#contatos"> Contatos </a></li>
      </ul>
    </nav>
    );
}

export default Nav;