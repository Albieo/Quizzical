import { ReactNode } from "react"
import Radio from '../components/Radio'
import data from '../assets/data'

const Questions = (): ReactNode => {
    return (
        <form>
        {data.results.map((data, idx) => {
          const options = [
            data.correct_answer,
            ...data.incorrect_answers,
          ]

          const shuffledOptions = options
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

            console.log(shuffledOptions)

          return (
            <Radio 
              key={idx}
              question={data.question}
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