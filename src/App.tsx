import { Routes, Route } from "react-router-dom";

import { DetailPage } from './components/DetailPage';

import { PokemonForm } from "./components/PokemonForm";

import { PokemonsPgae } from "./components/PokemonsPgae";



function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<PokemonForm/>} />
      <Route path="/Pokemon" element={< PokemonsPgae/>} />
      <Route path="/Pokemon/:id" element={<DetailPage/>} />
     
    </Routes>
    </>
  );
}

export default App;
