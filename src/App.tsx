import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading , setLoading] = useState(false)
  const [questions , setQuestions] = useState([])
  const [number , setNumber] = useState(0)
  const [userAnswers , setUserAnswers] = useState([])
  const [score , setScore] = useState(0)
  const [gameOver , setGameOver] = useState(true)

  const startTrivia = async () => {}

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY));
  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className="score">Score : 0</p>
      <p>Loading Question...</p>
      {/* <QuestionCard 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>NextQuestion</button>
    </div>
  );
}

export default App;
