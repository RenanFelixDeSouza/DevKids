import styles from './Footer.module.css';
const Footer = () => {
    return( <footer className={styles.footer}>
<h3>Aqui é o fim da página.</h3>
<p>Criador: Renan Felix de Souza <a href='https://www.linkedin.com/in/renan-felix-de-souza/' className={styles.linkedin } target="_blank" rel="noopener noreferrer">Linkedin</a></p>
<p>DevKids &copy; 2022</p>
    </footer>
    );
};

export default Footer;