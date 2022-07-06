import React from "react";
import { ProductImage,  CardContainer,  Button,  ButtonContainer} from "./Styled_PokeCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const PokemonCard = (props) => {
const navigate = useNavigate();
const {name, url, id} = props;
const [poke, setPoke] = useState([])

useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setPoke(res.data.sprites.front_default)
            
        })
        .catch((err) =>{
            console.log(err)
        })
    },[url])

console.log(url)

  return (
    <CardContainer>      

      <ProductImage alt={name} src={poke} />
     
        <ButtonContainer>
        <Button onClick={() =>props.addToPokedex(id)}>Adicionar a pokedex</Button>
        <Button onClick={() => navigate("detailspage")}>Detalhes do Pokemon</Button>
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCard;