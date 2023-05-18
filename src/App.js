import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/nav/Nav";
import SobreMim from "./components/sobreMim/SobreMim";
import Inicio from "./components/inicio/inicio";
import Habilidades from "./components/habilidades/habilidades";
import Projetos from "./components/projetos/projetos.jsx";
import Contatos from "./components/contatos/contatos";
import Footer from "./components/footer/footer";

function App() {
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
    },
  };

  return (
    <div className="App">
      <NavBar/>
      <Inicio />
      <SobreMim />
      <Projetos/>
      <Habilidades/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
