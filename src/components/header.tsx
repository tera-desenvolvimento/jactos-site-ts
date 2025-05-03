import logoJactos from "../img/logo-jactos.svg";

import "../style/header.css";

function Header() {
    return (
        <header className="header-container">
            <div className="header-element">
                <img src={logoJactos} alt="jactos-logo" className="logo-img" />

                <nav className="menu-element">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="#plans">Planos</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about">Sobre nós</a>
                        </li>
                        <li className="menu-item">
                            <a href="#brief">Depoimentos</a>
                        </li>
                        <li className="menu-item">
                            <a href="#social">Social</a>
                        </li>
                        <li className="menu-item">
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;