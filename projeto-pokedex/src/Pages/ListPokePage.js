import PokemonCard from "../components/pokemonCard"
import  "../components/Styled_PokeCard"
import { ContainerPrinc, ImgLogo, ListContainer } from "./Styled_ListPokePage";
import React from "react";
import Header from "../components/Header";

const ListPokePage = (props) => {
  const {pokedex, setPokedex} = props;
  let{pokemons} = props

  const addToPokedex = (pokemon) =>{
    const copy = [...pokedex, pokemon]
      setPokedex(copy);
    const index = pokemons.findIndex((poke)=>{
      if(poke.url === pokemon){
        return true
      }else{
        return false         
      }
    })
    console.log(index)
    if(index){
    pokemons.splice(index, 1)};

    console.log(pokemons) 
 }
return (
    <ContainerPrinc>  
          <ImgLogo src="assets/logo-poke.png"/>
          <ListContainer>
            {pokemons &&
            pokemons.map((pokemon)=>{
               return <PokemonCard id={pokemon.url} name={pokemon.name} url={pokemon.url} pokemon={pokemon} addToPokedex={addToPokedex}/>;
            })}
         </ListContainer>           
    </ContainerPrinc>
  );
}

export default ListPokePage;