import { useNavigate } from "react-router-dom";
import { goToListPokePage } from "../Router/coordinator";
import { goToPokedexPage } from "../Router/coordinator";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Ataques, Container, ContainerInfo, PokemonVerso, PokemonFrente, PokemonTamanho, PokemonStatus, PokemonTipo } from "./DetailsPageStyled";


const DetailsPokemonPage = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    getPokemon(id);
  }, []);

  const getPokemon = (id) => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <div>
        <Header/>
     
        <h3><u>Details Pokemon Page</u></h3>
        <button onClick={() => goToListPokePage(navigate)}>Voltar para o Início</button> 
        <button onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button> 
        
        {pokemon ? (
        <div>
        <Container>
          <h1>{(pokemon.name)}</h1>
          <PokemonTipo>
            <h4><strong>Tipo: </strong></h4>
            <p>
              {(
                pokemon &&
                  pokemon.types[0] &&
                  pokemon.types[0].type &&
                  pokemon.types[0].type.name
              )}
            </p>
            <p>
              {pokemon &&
                pokemon.types[1] &&
                pokemon.types[1].type &&
                (pokemon.types[1].type.name)}
            </p>
          </PokemonTipo>
          </Container>
          <ContainerInfo>
          <Ataques>
            <h3><strong>Principais ataques</strong></h3>
            <p>{(pokemon.moves[0].move.name)}</p>
            <p>{(pokemon.moves[1].move.name)}</p>
            <p>{(pokemon.moves[2].move.name)}</p>
            <p>{(pokemon.moves[3].move.name)}</p>
          </Ataques>
          <PokemonTamanho>
            <h3><strong>Medidas</strong></h3>
            <p>
              {pokemon.height}00 <strong>cm</strong>
            </p>
            <p>
              {pokemon.weight}00 <strong>g</strong>
            </p>
          </PokemonTamanho>
         
          <PokemonStatus>
            <h3><strong>Status</strong></h3>
            <p><strong>{(pokemon.stats[0].stat.name)}</strong> = {pokemon.stats[0].base_stat}</p>
            <p><strong>{(pokemon.stats[1].stat.name)}</strong> = {pokemon.stats[1].base_stat}</p>
            <p><strong>{(pokemon.stats[2].stat.name)}</strong> = {pokemon.stats[2].base_stat}</p>
            <p><strong>{(pokemon.stats[3].stat.name)}</strong> = {pokemon.stats[3].base_stat}</p>
            <p><strong>{(pokemon.stats[4].stat.name)}</strong> = {pokemon.stats[4].base_stat}</p>
          </PokemonStatus>
          <PokemonFrente>
            <img
              alt={pokemon.name}
              src={
                pokemon ? (
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                ) : (
                  <p>Aguarde...</p>
                )
              }
            />
          </PokemonFrente>
          <PokemonVerso>
            <img
              alt={pokemon.name}
              src={
                pokemon ? (
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                ) : (
                  <p>Aguarde...</p>
                )
              }
            />
          </PokemonVerso>
          </ContainerInfo>
          </div>
      ) : (
        <p>Aguarde...</p>
        )}

    </div>
  );
};

  export default DetailsPokemonPage;