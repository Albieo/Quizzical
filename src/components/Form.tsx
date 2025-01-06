import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

const GameForm = (): ReactNode => {
    const [selectedDiff, setSelectedDiff] = useState("");
    const [selectedCat, setSelectedCat] = useState("");
    const navigate = useNavigate();
    const selectClasses: string = "mt-2 mb-4 w-full p-2 border-2 rounded bg-gray-50 ring-1 ring-gray-300 cursor-pointer hover:bg-gray-200"


    const handleChangeDiff = (event: ChangeEvent<HTMLSelectElement>) => setSelectedDiff(event.target.value);
    const handleChangeCat = (event: ChangeEvent<HTMLSelectElement>) => setSelectedCat(event.target.value);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (selectedCat && selectedDiff) {
            navigate("/quiz", { state: { difficulty: selectedDiff, category: selectedCat } });
        } else {
            alert("Please choose both a difficulty and a category");
        }
    }
    
    return (
        <div className="flex justify-center items-center h-screen bg-slate-200 text-center ">
            <form method="get" onSubmit={handleSubmit}>
                <h1 className="text-5xl my-12 font-bold">Quizzical</h1>
                <p className="text-xl my-9">Some description if needed</p>
                <label htmlFor="difficulty" className="text-xl">Choose a difficulty</label>
                <br />
                <select className={selectClasses} name="difficulty" id="difficulty" value={selectedDiff} onChange={handleChangeDiff}>
                    <option value="" disabled>Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                <label htmlFor="category" className="text-xl">Choose a category</label>
                <br />
                <select className={selectClasses} name="category" id="category" value={selectedCat} onChange={handleChangeCat}>
                    <option value="" disabled>Select category</option>
                    <option value={9}>General Knowledge</option>
                    <option value={10}>Entertainment: Books</option>
                    <option value={11}>Entertainment: Film</option>
                    <option value={12}>Entertainment: Music</option>
                    <option value={13}>Entertainment: Musicals & Theatres</option>
                    <option value={14}>Entertainment: Television</option>
                    <option value={15}>Entertainment: Video Games</option>
                    <option value={16}>Entertainment: Board Gmaes</option>
                    <option value={17}>Science & Nature</option>
                    <option value={18}>Science: Computers</option>
                    <option value={19}>Science: Mathematics</option>
                    <option value={20}>Mythology</option>
                    <option value={21}>Sports</option>
                    <option value={22}>Geography</option>
                    <option value={23}>History</option>
                    <option value={24}>Politics</option>
                    <option value={25}>Art</option>
                    <option value={26}>Celebrities</option>
                    <option value={27}>Animals</option>
                    <option value={28}>Vehicles</option>
                    <option value={29}>Entertainment: Comics</option>
                    <option value={30}>Science: Gadgets</option>
                    <option value={31}>Entertainment: Japanese Anime & Manga</option>
                    <option value={32}>Entertainment: Cartoon & Animations</option>
                </select>
                <br />
                <button className="py-3 px-10 bg-indigo-400 text-white rounded-lg border border-slate-300 hover:border-indigo-400 shadow-lg" type="submit">Start Quiz</button>
            </form>
        </div>
    )
}

export default GameForm