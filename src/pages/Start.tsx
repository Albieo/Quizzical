// import { useEffect, useState } from "react";
// import axios from "axios";
import data from "../assets/data.ts"

// type GameType = {
//     category: number,
//     difficulty: string
// }

// {category, difficulty}: GameType


export default function Game() {
    // const [questions, setQuestions] = useState([])

    console.log(data.results.question)


    // useEffect(() => {
    //     const fetchQuestions = async () => {
    //         try { 
    //             const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
    //             const response = await axios.get(url)
    //             setQuestions(response.data.results)
    //         } catch (error) {
    //             console.log("There was an error fetching questions:", error)
    //         }
    //     }
    //     fetchQuestions()
    // }, [category, difficulty])

    return (
        <div className="text-4xl font-bold text-blue-500">
            {data.results.map((question) => (
                <p key={question.question}>{question.question}</p>
            ))}
        </div>
    )
}
