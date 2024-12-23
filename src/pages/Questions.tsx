import { ReactNode } from "react"
import decodeHtmlEntities from "../components/DecodeEntities"
import Radio from '../components/Radio'

type QuizQuestion = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Questions = ( { data }: {data: Array<QuizQuestion>} ): ReactNode => {
    return (
        <form>
        {data.map((data: QuizQuestion, idx: number) => {
          const decodedQuestion = decodeHtmlEntities(data.question);
          const decodedCorrectAnswer = decodeHtmlEntities(data.correct_answer);
          const decodedIncorrectAnswers = data.incorrect_answers.map(decodeHtmlEntities);

          const options = [
            decodedCorrectAnswer,
            ...decodedIncorrectAnswers,
          ]

          const shuffledOptions = options
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

            console.log(shuffledOptions)

          return (
            <Radio 
              key={idx}
              question={decodedQuestion}
              idx={idx}
              opt1={shuffledOptions[0]}
              opt2={shuffledOptions[1]}
              opt3={shuffledOptions[2]}
              opt4={shuffledOptions[3]}
            />
          )
        })}

        <br />

        <button type="submit">Check Answers</button>
      </form>
    )
}

export default Questions
