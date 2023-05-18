import "./projetos.css";
import { SiJavascript } from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef, useEffect, useState } from "react";
import Imagem from "../../assets/img/imagem2.jpg"
import LaBijoux from "../../assets/img/labijoux.png";
import Biblioteca from "../../assets/img/bibilioteca_jane_austen.png";
import Confeitaria from "../../assets/img/confeitaria_opera.jpg";
import Contador from "../../assets/img/contador.png";
import Locadora from "../../assets/img/locadora.png";
import EmBreve from "../../assets/img/em_breve.png";
{/*import Confeitaria from "../../assets/img/confeitaria_opera";*/}


export function Projetos() {
  const carrossel = useRef(null);

  //Movimentação do carrossel
  const handlerLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const handlerRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  return (
    <div className="projetos" id="projetos">
      <div className="conteudo_projetos">
        <h1> PROJETOS </h1>
        <div className="carrossel_projetos" ref={carrossel}>
          {/* 1*/}
          <div className="item">
            <img src={Confeitaria} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> CONFEITARIA ÓPERA</h2>
            <br></br>
            <div className="texto">
              <p> Projeto acadêmico, feito para uma confeitaria fictícia. </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              <h2> HTML - CSS - BOOTSTRAP </h2>{" "}
            </div>
            <br></br>
            <button className="ver_repositorio">
              {" "}
              <a href=""> VER REPOSITÓRIO</a>
            </button>
          </div>

          {/*2*/}
          <div className="item">
            <img src={Locadora} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> LOCADORA 4WHEELS </h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                Projeto acadêmico para uma locadora de carros, neste projeto,
                aplicamos o conceito de CRUD
              </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              <h2> C# - MYSQL </h2>{" "}
            </div>
            <br></br>
            <button className="ver_repositorio">
              {" "}
              <a href=""> VER REPOSITÓRIO</a>
            </button>
          </div>

          {/*3*/}
          <div className="item">
            <img src={LaBijoux} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> LABIJOUX </h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                Sistema para uma loja fictícia de Bijouterias, foi aplicado o conceito de CRUD, também possui cadastro e login de usuarios {" "}
              </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              <h2> HTML- CSS- MYSQL - PHP </h2>{" "}
            </div>
            <br></br>
            <button className="ver_repositorio">
              {" "}
              <a href=""> VER REPOSITÓRIO</a>
            </button>
          </div>

          {/*4*/}
          <div className="item">
            <img src={Biblioteca} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> BIBLIOTECA JANE AUSTEN</h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                Aplicativo android onde os usuários podem ler, avaliar e ter controle de seus livros lidos, aplicamos o conceito de CRUD{" "}
              </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              <h2> XML - JAVA - SQLITE </h2>{" "}
            </div>
            <br></br>
            <button className="ver_repositorio">
              {" "}
              <a href=""> VER REPOSITÓRIO</a>
            </button>
          </div>

          {/*5*/}
          <div className="item">
            <img src={Contador} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> CONTADOR </h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                Contador simples, para estudo de JavaScript e aplicação de estruturas de repetição{" "}
              </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              <h2> HTML - CSS - JAVASCRIPT </h2>{" "}
            </div>
            <br></br>
            <button className="ver_repositorio">
              {" "}
              <a href=""> VER REPOSITÓRIO</a>
            </button>
          </div>

          {/*6*/}
          <div className="item">
            <img src={EmBreve} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> CONTROLE FINANCEIRO</h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                EM BREVE{" "}
              </p>
            </div>
            <br></br>{" "}
            <div className="tecnologias">
              {" "}
              {/*<h2> HTML- CSS - REACT JS - NODE JS </h2>{" "}*/}
            </div>
            <br></br>

          </div>

          {/*7*/}
          <div className="item">
            <img src={EmBreve} alt="Projetos"></img>
            <br></br>
            <br></br>
            <h2> POKEDEX</h2>
            <br></br>
            <div className="texto">
              <p>
                {" "}
                EM BREVE{" "}
              </p>
            </div>
            <br></br>{" "}
            <br></br>
          </div>
        </div>

        <div className="botoes">
          <button onClick={handlerLeftClick}>
            {" "}
            <HiChevronLeft title="IR PARA A ESQUERDA" />{" "}
          </button>
          <button onClick={handlerRightClick}>
            {" "}
            <HiChevronRight title="IR PARA A DIREITA" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
