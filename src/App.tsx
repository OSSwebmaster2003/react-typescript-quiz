import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import { Difficulty , QuestionState } from './API';
import QuestionCard from './components/QuestionCard';

type AnswerObject = {
  question : string,
  answer : string,
  correct : boolean,
  correctAnswer : string
}

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading , setLoading] = useState(false)
  const [questions , setQuestions] = useState<QuestionState[]>([])
  const [number , setNumber] = useState(0)
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([])
  const [score , setScore] = useState(0)
  const [gameOver , setGameOver] = useState(true)

  console.log(questions);
  
  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY)
    setQuestions(newQuestions)

    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }
  

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={startTrivia}>Start</button>
      ) : null}
      {!gameOver && <p className="score">Score : 0</p>}
      {loading && <p>Loading Question...</p>}
      {!loading && !gameOver && 
        (<QuestionCard 
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />)
      }
      {!gameOver && !loading && userAnswers.length === number + 1 && number !==TOTAL_QUESTIONS - 1 ?  <button className='next' onClick={nextQuestion}>NextQuestion</button> : null}
    </div>
  );
}

export default App;
