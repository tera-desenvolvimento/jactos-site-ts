import logoJactos from "../img/logo-jactos.svg";
import homeIcon from "../img/home-icon.svg";
import plansIcon from "../img/plans-icon.svg";
import contactIcon from "../img/contact-icon.svg";
import subscriberIcon from "../img/sub-icon.svg";

import "../style/header.css";

function Header() {
    return (
        <header className="header-container">
            <div className="header-element">
                <img src={logoJactos} alt="jactos-logo" className="logo-img" />

                <nav className="menu-element">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">
                                <img src={homeIcon} alt="home-icon" className="menu-icon" />
                                Home
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#">
                                <img src={plansIcon} alt="plan-icon" className="menu-icon" />
                                Planos
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#">
                                <img src={contactIcon} alt="contact-icon" className="menu-icon" />
                                Contato
                            </a>
                        </li>
                        <li className="menu-item subscriber">
                            <a href="#">
                                <img src={subscriberIcon} alt="subscriber-icon" className="menu-icon" />
                                Central do assinante
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;