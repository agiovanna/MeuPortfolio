import "./inicio.css";
import RedeSocial from "../redesSociais/RedesSociais";
import FotoPrincipal from "../../assets/img/img_principal.png";
import { motion } from "framer-motion";

function Inicio() {
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
        delay: .5,
      }
    },
  };

  return (
    <div className="container" id="home">
      <motion.div
        className="inicio"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="img_principal">
          <motion.img
            src={FotoPrincipal}
            alt="Giovanna Santos"
            variants={item}
          />
        </div>
        <motion.div className="informacoes_1" variants={item}>
          <h1 > GIOVANNA SANTOS </h1>
          <h2> Developer</h2>
          <RedeSocial />
        </motion.div>
      </motion.div>
      </div>
  );
}

export default Inicio;
