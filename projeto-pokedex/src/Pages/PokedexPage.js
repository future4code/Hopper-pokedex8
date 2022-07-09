import Header from "../components/Header";
import PokemonCard from "../components/pokemonCard";
import { ListContainer } from "./Styled_ListPokePage";

const PokedexPage = (props) => {
  const {pokedex} = props;

    return (
      <>
        <h1><u>Pokedex Page</u></h1>
        <Header/>


        {pokedex && pokedex.map((pokemon)=>{
          return <PokemonCard key={pokemon.id}  id={pokemon.name}  name={pokemon.name} url={pokemon.url}/>
        })}

        <ListContainer>
          {pokedex && pokedex.map((pokemon)=>{
            return <PokemonCard key={pokemon.id}  id={pokemon.name} url={pokemon}/>
          })}
        </ListContainer>

      </>
    );
  };
  export default PokedexPage;