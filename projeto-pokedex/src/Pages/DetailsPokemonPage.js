import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPokePage } from "../Router/coordinator";
import { goToPokedexPage } from "../Router/coordinator";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import PokemonCard from "../components/pokemonCard"
// import  "../components/Styled_PokeCard"
// import useRequestData from "../hooks/useRequestData";

const DetailsPokemonPage = () => {
  const navigate = useNavigate();


//   const [pokemon, setPokemon] = useState(undefined);
//   const { id } = useParams();

//   useEffect(() => {
//     getPokemon(id);
//   }, []);

//   const getPokemon = (id) => {
//     axios
//       .get(`${BASE_URL}/${id}`)
//       .then((res) => {
//         setPokemon(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };



// const DetailsPokemonPage = () => {
//   const [poke, setPoke] = useState([])
//   const pokemons =useRequestData('https://pokeapi.co/api/v2/pokemon')
//   useEffect(()=>{
//     axios.get()
//     .then((res)=>{
//       console.log(res)
//         setPoke(res.data.id)
//     })
//     .catch((err) =>{
//         alert('Ocorreu um erro')
//     })
// },[])

    return (
      <>
        {/* <Header/> */}
     
        <h1><u>Details Pokemon Page</u></h1>
        <button onClick={() => goToListPokePage(navigate)}>Voltar para o Início</button> 
        <button onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button> 
      </>
    );
  };

  export default DetailsPokemonPage;