import React from "react";
import { ProductImage,  CardContainer,  Button,  ButtonContainer} from "./styledPokeCart";
import { useNavigate } from "react-router-dom";

const PokemonCart = () => {
const navigate = useNavigate();

  return (
    <CardContainer>
      <ProductImage alt={"pokemon"} src={`https://www.euax.com.br/wp-content/uploads/2019/10/Teste.png`} />
     
        <ButtonContainer>
        <Button onClick={() => navigate("pokedexpage")}>Visualizar pokedex</Button>
        <Button onClick={() => navigate("detailspage")}>Detalhes do Pokemon</Button>
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCart;