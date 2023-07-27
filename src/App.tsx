import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const startTrivia = async () => {}

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className="score">Score : 0</p>
      <p>Loading Question...</p>
      <QuestionCard/>
      <button className='next' onClick={nextQuestion}>NextQuestion</button>
    </div>
  );
}

export default App;
