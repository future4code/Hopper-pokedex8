import styled from "styled-components";

export const CardContainer = styled.div`
  border: 0.5px solid grey;
  border-radius: 0.3em;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: lightgray;
  z-index: 2;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
`

export const Button = styled.button`
margin: 0.4em;
flex-direction: row
`
export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
`;