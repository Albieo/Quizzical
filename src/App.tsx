import { BrowserRouter, Route, Routes } from "react-router-dom"
import GameForm from "./components/Form"
import Game from "./pages/Start"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GameForm />} path="/" />
        <Route element={<Game />} path="/quiz" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
