import React from "react";
import { ProductImage,  CardContainer,  Button,  ButtonContainer} from "./Styled_PokeCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { goToDetailsPokemonPage } from "../Router/coordinator";

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

    return (
    <CardContainer>      

      <ProductImage alt={name} src={poke} />
     
        <ButtonContainer>
        <Button onClick={() =>props.addToPokedex(id)}>Adicionar a pokedex</Button>
        <button onClick={() => goToDetailsPokemonPage(navigate)}>Visualizar Detalhes</button> 
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCard;