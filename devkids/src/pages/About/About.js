//css
import styles from './About.module.css'

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.div}>
          <h2 className={styles.devkids}>Sobre o DevKids</h2>
          <p className={styles.p}>Esse projeto foi feito Através do react (front-end) e firebase (back-end) para um trabalho da faculdade.</p> 
          <Link to="/aprendizado" className='btn'><button className={styles.aprenda}> aprenda brincando! </button></Link>
        </div>
    );
};

export default About;