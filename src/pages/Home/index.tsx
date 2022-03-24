import React, { useContext } from "react";

import { Container, Title } from "./styles";
import shuffle from "./../../assets/shuffle.svg";
import { MovieContext } from "../../contexts/MovieContextType";
import MovieContent from "../../components/MovieContent";
import Button from "../../components/Button";


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Home: React.FC = () => {
  const { setPage, setMovie } = useContext(MovieContext);

  return (
    <Container>
      <Title>
        <img src={shuffle} alt="" />
        <h1>Não sabe o que assistir?</h1>
      </Title>

      <MovieContent />

      <Button
        onClick={() => {
          setPage(getRandomInt(1, 501))
          setMovie(getRandomInt(0, 20))
        }}
      >
        Encontrar filme
      </Button>

      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </Container>
  );
};

export default Home;
