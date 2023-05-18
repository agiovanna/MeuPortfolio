import {
  SiCsharp,
  SiCsswizardry,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
} from "react-icons/si";
import { FaJava, FaCss3, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import "./habilidades.css";
import { motion } from "framer-motion";
import { useRef } from "react";

function Habilidades() {

    const carrossel = useRef(null);


    //Movimentação do carrossel
    const handlerLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;

    }

    const handlerRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }
  return (
    <div className="habilidades" id="habilidades">
      <div className="conteudo_habilidades">
        <h1 animate={{ y: 20 }} className="titulo_habilidades">
          {" "}
          HABILIDADES{" "}
        </h1>
        <motion.div className="carrossel_habilidades" ref={carrossel}>
          <div className="item">
            <AiOutlineHtml5  size={150}/>
            <span className="nome"> HTML 5</span>
          </div>
          <div className="item">
            <FaCss3 size={140}/>
            <span className="nome"> CSS 3</span>
          </div>
          <div className="item">
            <FaBootstrap size={140}/>
            <span className="nome"> Bootstrap</span>
          </div>
          <div className="item">
            <IoLogoJavascript size={140} />
            <span className="nome"> JavaScript</span>
          </div>
          <div className="item">
            <SiReact size={140}/>
            <span className="nome"> React JS/ React-Native</span>
          </div>
          <div className="item">
            <SiPhp size={140} />
            <span className="nome"> PHP </span>
          </div>
          <div className="item">
            <SiMysql size={140}/>
            <span className="nome"> MySql</span>
          </div>
          <div className="item">
            <FaJava size={140}/>
            <span className="nome"> Java</span>
          </div>
          <div className="item">
            <SiCsharp size={140}/>
            <span className="nome"> Csharp</span>
          </div>
          <div className="item">
            <SiFigma size={140} />
            <span className="nome"> Figma </span>
          </div>
        </motion.div>
        <div className="botoes">
            <button onClick={handlerLeftClick}> <HiChevronLeft title="IR PARA A ESQUERDA"/> </button>
            <button onClick={handlerRightClick}> <HiChevronRight title="IR PARA A DIREITA"/> </button>
        </div>
      </div>
      </div>
  );
}

export default Habilidades;
