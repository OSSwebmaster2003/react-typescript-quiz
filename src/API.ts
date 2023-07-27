import { shuffleArray } from "./utils"

export type Question = {
  category : string,
  correct_answer:string,
  difficulty:string,
  incorrect_answers : string[],
  question:string,
  type : string
}
export type QuestionState = Question & {
  answer : string[]
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount : number , difficulty : Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await ((await fetch(endpoint))).json()
  return data.results.map((result:Question) => (
    {
      ...result,
      answer: shuffleArray([...result.incorrect_answers , result.correct_answer])
    }
  ))
}