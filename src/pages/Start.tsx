import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


type QuizQuestion = {
    id: string;
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

type GameType = {
    category: number,
    difficulty: string
}

const Game = (): ReactNode => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]); 
    const location = useLocation();
    const { difficulty, category }: GameType = location.state as GameType || { difficulty: '', category: 0 };


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
                const response = await axios.get(url)
                const formattedQuestions: QuizQuestion[] = response.data.results.map((question: QuizQuestion ) => ({
                    id: uuidv4(),
                    type: question.type,
                    difficulty: question.difficulty,
                    category: question.category,
                    question: question.question,
                    correct_answer: question.correct_answer,
                    incorrect_answers: question.incorrect_answers
                }));
                setQuestions(formattedQuestions);

            } catch (error) {
                console.log("There was an error fetching questions:", error)
            }
        }
        fetchQuestions();
    }, [category, difficulty]);

    if (questions.length === 0) {
      return <p>Loading...</p>;
    }
    

    return (<Questions data={questions} />);
}

export default Game;

