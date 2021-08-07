import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30%;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom:0;
    margin-top: 5%;
    padding: 0;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
  transition: background-size .9s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //State de Frases
  const [frase, setFrase] = useState({});

  //Cargar una frase
  useEffect( () => {
    consultarApi();
  }, [] )

  const consultarApi = async () => {

    try {

      const url = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const respuesta = await url.json();

      setFrase(respuesta[0])

    } catch (error) {

      console.log(error);

    }

  }

  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarApi}
      >Obtener Frase</Boton>

    </Contenedor>
  );
}

export default App;
