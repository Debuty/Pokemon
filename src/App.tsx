import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import { DetailPage } from './components/DetailPage';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pokemon" element={<PokemonPage />} />
      <Route path="/Pokemon/:id" element={<DetailPage/>} />
    </Routes>
    </>
  );
}

export default App;
