import React from "react";
import { ProductImage,  CardContainer,  Button,  ButtonContainer} from "./Styled_PokeCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = (props) => {
const navigate = useNavigate();
const {name, url} = props;
const [poke, setPoke] = useState([])

useEffect(()=>{
        axios.get(url)
        .then((res)=>{
          console.log(res)
            setPoke(res.data.sprites.front_default)
        })
        .catch((err) =>{
            alert('Ocorreu um erro')
        })
    },[url])

console.log(poke)

  return (
    <CardContainer>      

      <ProductImage alt={name} src={poke} />
     
        <ButtonContainer>
        <Button onClick={() => navigate("pokedexpage")}>Visualizar pokedex</Button>
        <Button onClick={() => navigate("/detailspage/:id")}>Detalhes do Pokemon</Button>
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCard;