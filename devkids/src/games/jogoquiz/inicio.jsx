import quiz from '../../img/3225531-q-and-a-concept-with-tiny-man-people-character-with-big-question-mark-vetor.png'

import styles from"./jogoQuiz.module.css"


const Inicio =  () => {
  return (
   <div className={styles.welcome}>
    <h2>Seja bem-vindo</h2>
    <p>Clique no botão abaixo para começar:</p>
    <button>Iniciar</button>
    <img src={quiz} alt='inicio do quiz'></img>

   </div>

    )
}

export default Inicio;