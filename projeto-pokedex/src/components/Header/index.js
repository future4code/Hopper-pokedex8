import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
const Header = () => {
    const navigate = useNavigate();
    return (
      <Container>
    <div>
          <div className="header">
          <button onClick={() => navigate("/")}>Voltar</button>
          <button onClick={() => navigate("pokedexpage")}>Visualizar pokedex</button>
    </div>
            </div>
            </Container>
  )
}

export default Header;