import React from "react";
import { ProductImage,  CardContainer,  Button,  ButtonContainer} from "./styledPokeCart";
import { useNavigate } from "react-router-dom";



const PokemonCart = (props) => {
const navigate = useNavigate();
const {name, url} = props;



  return (
    <CardContainer>
      

      <ProductImage alt={name} src={url} />
     
        <ButtonContainer>
        <Button onClick={() => navigate("pokedexpage")}>Visualizar pokedex</Button>
        <Button onClick={() => navigate("detailspage")}>Detalhes do Pokemon</Button>
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCart;