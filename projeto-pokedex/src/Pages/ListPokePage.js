import PokemonCart from "../components/pokemonCart"
import  "../components/styledPokeCart"
import useRequestData from "../hooks/useRequestData";


const ListPokePage = () => {
const pokemons = useRequestData('https://pokeapi.co/api/v2/pokemon/')

console.log(pokemons)
  return (
    <>  
          <h1><u>ListPokePage</u></h1>
          {pokemons &&
          pokemons.map((pokemon)=>{
            return <PokemonCart name={pokemon.name} src={pokemon.url}/>;
          })}

          
          
    </>
  );
};
export default ListPokePage;