import { ChangeEvent, ReactNode } from "react"

type Question = {
    question: string,
    idx: number
    opt1: string,
    opt2: string,
    opt3: string,
    opt4: string,
}


export default function Radio({ question, idx, opt1, opt2, opt3, opt4 }: Question): ReactNode {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
    }

    return (
        <>
            <h1 className="font-bold mt-10">{question}</h1>
            <div className="h-full w-1/2 mx-2 flex flex-row justify-evenly items-center bg-slate-200">
                <input type="radio" name={`question-${idx}`} id={`option-${idx}-1`} value={opt1} className="hidden" onChange={handleChange}/>
                <input type="radio" name={`question-${idx}`} id={`option-${idx}-2`} value={opt2} className="hidden" onChange={handleChange}/>
                <input type="radio" name={`question-${idx}`} id={`option-${idx}-3`} value={opt3} className="hidden" onChange={handleChange}/>
                <input type="radio" name={`question-${idx}`} id={`option-${idx}-4`} value={opt4} className="hidden" onChange={handleChange}/>
                <label htmlFor={`option-${idx}-1`}>{opt1}</label>
                <label htmlFor={`option-${idx}-2`}>{opt2}</label>
                <label htmlFor={`option-${idx}-3`}>{opt3}</label>
                <label htmlFor={`option-${idx}-4`}>{opt4}</label>
            </div>
        </>
    )
}
