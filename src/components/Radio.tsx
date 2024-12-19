import { ReactNode } from "react"

type Question = {
    question: string,
    idx: number
    opt1: string,
    opt2: string,
    opt3: string,
    opt4: string,
}

export default function Radio({ question, idx, opt1, opt2, opt3, opt4 }: Question): ReactNode {
    return (
        <>
            <h1>{question}</h1>
            <input type="radio" name={`question-${idx}`} id={`option-${idx}-1`} value={opt1} />
            <label htmlFor={`option-${idx}-1`}>{opt1}</label>
            <input type="radio" name={`question-${idx}`} id={`option-${idx}-2`} value={opt2} />
            <label htmlFor={`option-${idx}-2`}>{opt2}</label>
            <input type="radio" name={`question-${idx}`} id={`option-${idx}-3`} value={opt3} />
            <label htmlFor={`option-${idx}-3`}>{opt3}</label>
            <input type="radio" name={`question-${idx}`} id={`option-${idx}-4`} value={opt4} />
            <label htmlFor={`option-${idx}-4`}>{opt4}</label>
        </>
    )
}