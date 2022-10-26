import styles from './jogoQuiz.module.css'


import Inicio from './inicio.jsx';




const JogoQuiz =  () => {
  return (
   <div className={styles.quizApp}>
    <h1>Quiz de programação</h1>
    <Inicio/>
   </div>

    )
}

export default JogoQuiz;