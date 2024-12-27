import { ReactNode } from "react"
import decodeHtmlEntities from "../components/DecodeEntities"
import Radio from '../components/Radio'

type QuizQuestion = {
  id: string;
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Questions = ({ data }: { data: Array<QuizQuestion> }): ReactNode => {
    
    return (
        <form className="flex flex-col justify-center items-center bg-slate-200">
        {data.map((data: QuizQuestion, idx: number) => { 
          const decodedQuestion = decodeHtmlEntities(data.question);
          const decodedAnswer = decodeHtmlEntities(data.correct_answer);
          const decodedIncorrectAnswers = data.incorrect_answers.map((answer: string) => decodeHtmlEntities(answer));
          const options = [...decodedIncorrectAnswers, decodedAnswer];

          return (
            <>
              <Radio
                key={data.id}
                question={decodedQuestion}
                idx={idx}
                opt1={options[0]}
                opt2={options[1]}
                opt3={options[2]}
                opt4={options[3]}
              />
            </>
          )}
        )}
        <br />

        <button type="submit" className="mt-10 py-3 px-10 bg-indigo-400 text-white rounded-lg border border-slate-300 hover:border-indigo-400 shadow-lg">Check Answers</button>
      </form>
    )
}

export default Questions
