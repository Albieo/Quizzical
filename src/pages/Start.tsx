import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";
import { useLocation } from "react-router-dom";

type GameType = {
    category: number,
    difficulty: string
}

const Game = (): ReactNode => {
    const [questions, setQuestions] = useState([])
    const location = useLocation();
    const { difficulty, category }: GameType = location.state || { difficulty: '', category: 0 };


    useEffect(() => {
        const fetchQuestions = async () => {
            try { 
                const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
                const response = await axios.get(url)
                setQuestions(response.data.results)
            } catch (error) {
                console.log("There was an error fetching questions:", error)
            }
        }
        fetchQuestions()
    }, [category, difficulty])

    return (<Questions data={questions} />)
}

export default Game;
