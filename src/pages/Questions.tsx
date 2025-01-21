import { FormEvent, Fragment, ReactNode, useRef, useState } from "react"
import decodeHtmlEntities from "../components/DecodeEntities"
import Radio from '../components/Radio'
import { QuizQuestion } from "./Start"

const Questions = ({ data }: { data: Array<QuizQuestion> }): ReactNode => {
  const correctAnswers = useRef<string[]>(data.map((question: QuizQuestion) => question.correct_answer))
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [score, setScore] = useState<number>(0)
  const [answerStatus, setAnswerStatus] = useState<string[]>(Array(data.length).fill(''))

  const handleAnswers = (idx: number, answer: string) => {
    setSelectedAnswers(prevState => {
      const updatedState = [...prevState]
      updatedState[idx] = answer
      return updatedState
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let currentScore: number = 0
    const newAnswerStatus = [...answerStatus]
    correctAnswers.current.forEach((correctAnswer, idx) => {
      if (selectedAnswers[idx] === correctAnswer) {
        currentScore++
        newAnswerStatus[idx] = 'correct'
      } else {
        newAnswerStatus[idx] = 'incorrect'
      }
    })

    setScore(currentScore)
    setAnswerStatus(newAnswerStatus)
  }

  return (
      <form className="flex flex-col justify-center items-center bg-slate-200" onSubmit={handleSubmit}>
      {data.map((data: QuizQuestion, idx: number) => { 
        const decodedQuestion = decodeHtmlEntities(data.question);
        const decodedAnswer = decodeHtmlEntities(data.correct_answer);
        const decodedIncorrectAnswers = data.incorrect_answers.map((answer: string) => decodeHtmlEntities(answer));
        const options = [...decodedIncorrectAnswers, decodedAnswer];

        return (
          <Fragment key={data.id}>
            <Radio
              key={data.id}
              question={decodedQuestion}
              idx={idx}
              opt1={options[0]}
              opt2={options[1]}
              opt3={options[2]}
              opt4={options[3]}
              status={answerStatus[idx]}
              onChange={(answer: string) => handleAnswers(idx, answer)}
            />
          </Fragment>
        )}
      )}
      <br />

      <h2>Score: {score} out of {data.length}</h2>

      <button type="submit" className="mt-10 py-3 px-10 bg-indigo-400 text-white rounded-lg border border-slate-300 hover:border-indigo-400 shadow-lg">Check Answers</button>
    </form>
  )
}

export default Questions
