import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPokePage from "../Pages/ListPokePage";
import PokedexPage from "../Pages/PokedexPage";
import DetailsPokemonPage from "../Pages/DetailsPokemonPage";
import ErrorPage from "../Pages/ErrorPage";
import { useState } from "react";
import useRequestData from "../hooks/useRequestData";


const Router = () => {
  const [pokedex, setPokedex] = useState([]);
  const pokemons = useRequestData('https://pokeapi.co/api/v2/pokemon');
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListPokePage pokemons={pokemons} pokedex={pokedex} setPokedex={setPokedex}/>} />            
            <Route path="pokedexpage" element={<PokedexPage pokemons={pokemons} pokedex={pokedex} setPokedex={setPokedex} />} />
            <Route path="detailspage" element={<DetailsPokemonPage />} /> 
            <Route path="*" element={<ErrorPage />} />        
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router; 