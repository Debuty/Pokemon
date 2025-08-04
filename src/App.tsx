import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import { DetailPage } from './components/DetailPage';
 import { InfiniteQuery } from "./pages/InfiniteQuery";
import { PokemonForm } from "./components/PokemonForm";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pokemon" element={< PokemonPage/>} />
      <Route path="/InfiniteQuery" element={< InfiniteQuery/>} />
      <Route path="/Pokemon/:id" element={<DetailPage/>} />
      <Route path="/InfiniteQuery/:id" element={<DetailPage/>} />
      <Route path="/Form" element={<PokemonForm/>} />
    </Routes>
    </>
  );
}

export default App;
