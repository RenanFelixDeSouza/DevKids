import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavBar = () => {
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
                <li>
                    <NavLink
                     to="/about" 
                     className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Aprendizado
                    </NavLink>
                </li>
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
                     to="/Register" 
                     className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Registrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;