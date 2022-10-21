//css
import styles from './About.module.css'

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
          <h2>Sobre o DevKids</h2>
          <p>Esse projeto foi feito Através do react (front-end) e firebase (back-end) para um trabalho da faculdade.</p> 
          <Link to="/aprendizado" className='btn'> aprenda brincando!</Link>
        </div>
    );
};

export default About;