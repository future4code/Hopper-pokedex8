import React from "react";
import {
  ProductImage,
  CardContainer,
  Button,
  ButtonContainer
  
} from "./styled";

const PokemonCart = () => {


  return (
    <CardContainer>
      <ProductImage alt={"pokemon"} src={`https://www.euax.com.br/wp-content/uploads/2019/10/Teste.png`} />
     
        <ButtonContainer>
            <Button>Adicionar a pokedex</Button>
            <Button>Ver detalhes</Button>
        </ButtonContainer>
    </CardContainer>
  );
};

export default PokemonCart;