import React from "react";
import "./sobre_mim.css";
import minhaFoto from "../../assets/img/minha_foto.jpeg";
import {motion} from "framer-motion";

function SobreMim() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .8
      },
    },
  };
    
  return (
    <div className="container" id="sobremim">
    <motion.div className="sobre_mim" variants={container}
    initial="hidden"
    animate="visible">
    <motion.div className="texto" varients={item}>
      <h1> SOBRE MIM</h1>
      <br></br>
      <p>
        {" "}
        Olá! Eu me chamo Giovanna e tenho 17 anos. Quando criança, sempre fui
        curiosa para entender como as coisas funcionavam, principalmente a
        tecnologia; Essa curiosidade da infancia foi minha inspiração para
        dedicar meus estudos à área de tecnologia.
        <br></br><br></br>
        {" "}
        Atualmente, estou no meu terceiro e ultimo ano do curso técnico em
        Análise e Desenvolvimento de Sistemas integrado ao ensino médio, na
        ETEC. Estou sempre em busca de novos conhecimentos e aprimoramentos.{" "}
      </p>
      <br></br>
      <img src={minhaFoto} alt="Giovanna Santos"></img>
      </motion.div>
      
    </motion.div>
    </div>
  );
}

export default SobreMim;
