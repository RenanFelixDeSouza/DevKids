import styles from './Aprendizado.module.css';


import bela from '../../img/A bela e a fera.jpg';
import quiz from '../../img/sinal-de-neon-quiz_1262-19629.webp'


const Aprendizado = () => {
  return (
    <div className={styles.fundo}>


      <h2 className={styles.textCenter}>Jogos</h2>
      <div className={styles.container}>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>jogo tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>jogo tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>jogo tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>jogo tal</span>
        </a>

        <a href='/jogoquiz' className={styles.imagem}>
          <img src={quiz} alt="img" ></img>
          <span className={styles.textCente}>Quiz programação</span>
        </a>

      </div>


      <h2 className={styles.textCenter2}>Video Aula</h2>

      <div className={styles.container2}>

      <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        <a href='/' className={styles.imagem}>
          <img src={bela} alt="img" ></img>
          <span className={styles.textCente}>video tal</span>
        </a>

        </div>
<p className={styles.espacoFooter}>fgds</p>
      </div>
  )
}

export default Aprendizado