import { ReactNode } from "react";
import axios from "axios";
import Questions from "./Questions";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from "react-query";


export interface QuizQuestion {
    id: string;
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface GameType {
    category: number,
    difficulty: string
}

const fetchQuestions = async (category: number, difficulty: string): Promise<QuizQuestion[]> => {
    const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await axios.get(url);

    return response.data.results.map((question: QuizQuestion) => ({
        id: uuidv4(),
        type: question.type,
        difficulty: question.difficulty,
        category: question.category,
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answers: question.incorrect_answers
    }));
};

const Game = (): ReactNode => {
    const location = useLocation();
    const { difficulty, category }: GameType = location.state as GameType || { difficulty: '', category: 0 };

    const { data: questions = [], isLoading, isError, error } = useQuery(
        ['quizQuestions', category, difficulty],
        () => fetchQuestions(category, difficulty),
        { enabled: category !== 0 && difficulty !== '', }
    );

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>There was an error fetching questions: {error instanceof Error ? error.message : 'Unknown error'}</p>;

    return (
        <div className="flex flex-col my-32 justify-center bg-slate-200 text-center content-center">
            <Questions data={questions} />
        </div>
    );
}

export default Game;

