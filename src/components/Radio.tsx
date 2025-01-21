import { ChangeEvent, ReactNode, useState } from "react"

interface Question {
    question: string,
    idx: number
    opt1: string,
    opt2: string,
    opt3: string,
    opt4: string,
}

interface RadioProps extends Question {
    status: string;
    onChange: (value: string) => void;
}

export default function Radio({ question, idx, opt1, opt2, opt3, opt4, status, onChange }: RadioProps): ReactNode {
    const [selected, setSelected] = useState(opt1);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
        onChange(event.target.value);
    }

    const choosen: string = "bg-slate-400 mx-2 py-1 px-8 rounded-lg text-white";
    const notChoosen: string = "border-2 border-slate-500 mx-2 py-1 px-8 rounded-lg cursor-pointer";

    const correctClass = "bg-green-200 border-2 border-green-700 mx-2 py-1 px-8 rounded-lg";
    const incorrectClass = "bg-red-200 border-2 border-red-700 mx-2 py-1 px-8 rounded-lg text-blue-600";


    return (
        <>
            <h1 className="font-bold mt-10 mb-3 text-xl">{question}</h1>
            <div className="h-full w-full mx-auto flex flex-row justify-evenly items-center bg-slate-200">
                <input
                    type="radio" 
                    name={`question-${idx}`} 
                    id={`option-${idx}-1`} 
                    value={opt1} 
                    checked={selected === opt1} 
                    className="hidden"
                    onChange={handleChange}
                />
                <input
                    type="radio" 
                    name={`question-${idx}`} 
                    id={`option-${idx}-2`} 
                    value={opt2} 
                    checked={selected === opt2} 
                    className="hidden" 
                    onChange={handleChange}
                />
                <input
                    type="radio"
                    name={`question-${idx}`}
                    id={`option-${idx}-3`}
                    value={opt3}
                    checked={selected === opt3}
                    className="hidden"
                    onChange={handleChange}
                />
                <input
                    type="radio"
                    name={`question-${idx}`}
                    id={`option-${idx}-4`}
                    value={opt4}
                    checked={selected === opt4}
                    className="hidden"
                    onChange={handleChange}
                />

                <label
                    htmlFor={`option-${idx}-1`}
                    className={`${
                        selected === opt1
                        ? status === "correct"
                            ? correctClass
                            : status === "incorrect"
                            ? incorrectClass
                            : choosen
                        : notChoosen
                    }`}
                >
                    {opt1}
                </label>
                <label
                    htmlFor={`option-${idx}-2`}
                    className={`${
                        selected === opt2
                        ? status === "correct"
                            ? correctClass
                            : status === "incorrect"
                            ? incorrectClass
                            : choosen
                        : notChoosen
                    }`}
                >
                    {opt2}
                </label>
                <label
                    htmlFor={`option-${idx}-3`}
                    className={`${
                        selected === opt3
                        ? status === "correct"
                            ? correctClass
                            : status === "incorrect"
                            ? incorrectClass
                            : choosen
                        : notChoosen
                    }`}
                >
                    {opt3}
                </label>
                <label
                    htmlFor={`option-${idx}-4`}
                    className={`${
                        selected === opt4
                        ? status === "correct"
                            ? correctClass
                            : status === "incorrect"
                            ? incorrectClass
                            : choosen
                        : notChoosen
                    }`}
                >
                    {opt4}
                </label>
            </div>
        </>
    )
}
