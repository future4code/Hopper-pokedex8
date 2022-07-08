import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPokePage from "../Pages/ListPokePage";
import PokedexPage from "../Pages/PokedexPage";
import DetailsPokemonPage from "../Pages/DetailsPokemonPage";
import ErrorPage from "../Pages/ErrorPage";

const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListPokePage/>} />            
            <Route path="/pokedexpage" element={<PokedexPage />} />
            <Route path="/detailspage/:id" element={<DetailsPokemonPage />} /> 
            <Route path="*" element={<ErrorPage />} />        
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router; 