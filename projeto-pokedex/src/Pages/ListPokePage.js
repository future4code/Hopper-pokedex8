import { useNavigate } from "react-router-dom";
import PokemonCart from "../components/pokemonCart"
const ListPokePage = () => {
  const navigate = useNavigate();
  return (
    <>
          <h1><u>ListPokePage</u></h1>
          <PokemonCart/>

        <button onClick={() => navigate("pokedexpage")}>Visualizar pokedex</button>
        <button onClick={() => navigate("detailspage")}>Detalhes do Pokemon</button>
    </>
  );
};
export default ListPokePage;