import logoJactos from "../img/logo-jactos.svg";
import Aligner from "./aligner";

import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
        <Aligner direction="horizontal">
            <div className="footer-logo">
                <img src={logoJactos} alt="app-premiere" />
            </div>
            <div className="menu-column">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#">Início</a>
                    </li>
                    <li className="menu-item">
                        <a href="#about">Sobre nós</a>
                    </li>
                    <li className="menu-item">
                        <a href="#plans">Planos</a>
                    </li>
                    <li className="menu-item">
                        <a href="#social">Social</a>
                    </li>
                </ul>
            </div>
            <div className="menu-column">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#support">Suporte</a>
                    </li>
                    <li className="menu-item">
                        <a href="#about">Trabalhe conosco</a>
                    </li>
                    <li className="menu-item">
                        <a href="#plans">Endereços</a>
                    </li>
                    <li className="menu-item">
                        <a href="#social">Contrato Online</a>
                    </li>
                </ul>
            </div>
        </Aligner>
        <Aligner direction="horizontal">
            <div className="footer-text">
                <p>20.747.742/0001-92 - Goiânia - GO © Todos os direitos reservados.</p>
            </div>
        </Aligner>
    </footer>
  );
}

export default Footer;