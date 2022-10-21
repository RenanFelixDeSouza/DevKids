import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContent";

import styles from "./Navbar.module.css";


const NavBar = () => {
    const { user } = useAuthValue();
    const {logout} = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Dev <span>Kids</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Registrar"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Registrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/aprendizado"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Jogos e video aula
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Dashboard"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Sobre nós
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;