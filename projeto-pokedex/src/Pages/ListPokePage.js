import PokemonCard from "../components/pokemonCard"
import  "../components/Styled_PokeCard"
import { ContainerPrinc, ImgLogo, ListContainer } from "./Styled_ListPokePage";
import React from "react";
import Header from "../components/Header";




const ListPokePage = (props) => {
  const {pokedex, setPokedex, pokemons} = props;

  // const pokemons = useRequestData('https://pokeapi.co/api/v2/pokemon');

  const addToPokedex = (pokemon) =>{
    const copy = [...pokedex, pokemon]
    setPokedex(copy);
  
  }

console.log(pokedex)


return (
    <ContainerPrinc>  
          <ImgLogo src="assets/logo-poke.png"/>
          <ListContainer>
            {pokemons &&
            pokemons.map((pokemon)=>{
               return <PokemonCard id={pokemon.name} name={pokemon.name} url={pokemon.url} addToPokedex={addToPokedex}/>;
            })}
         </ListContainer>           
    </ContainerPrinc>
  );
};


export default ListPokePage;