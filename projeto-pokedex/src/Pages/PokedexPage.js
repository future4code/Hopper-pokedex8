import Header from "../components/Header";
import PokemonCard from "../components/pokemonCard";


const PokedexPage = (props) => {
  const {pokedex, pokemon} = props;

  

    return (
      <>
        <h1><u>Pokedex Page</u></h1>
        <Header/>

        {pokedex && pokedex.map((pokemon)=>{
          return <PokemonCard key={pokemon.id}  id={pokemon.name} name={pokemon.name} url={pokemon.url}/>
        })}
      </>
    );
  };
  export default PokedexPage;