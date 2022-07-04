import PokemonCard from "../components/pokemonCard"
import  "../components/Styled_PokeCard"
import useRequestData from "../hooks/useRequestData";
import { ListContainer } from "./Styled_ListPokePage";

import React from "react";




const ListPokePage = () => {


 const pokemons = useRequestData('https://pokeapi.co/api/v2/pokemon')


console.log(pokemons)



return (
    <>  
          <h1><u>ListPokePage</u></h1>
          <ListContainer>
            {pokemons &&
            pokemons.map((pokemon)=>{
              console.log(pokemon.url)
              return <PokemonCard name={pokemon.name} url={pokemon.url}/>;
            })}
         </ListContainer>           
    </>
  );
};


export default ListPokePage;