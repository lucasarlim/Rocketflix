import React, { useContext } from "react";

import {
  API_KEY,
  BASE_URL,
  IMG_URL,
  language,
  pageNumber,
} from "../../services/api";

import { Container, InfoMovie, Title, Description } from "./styles";

import poster from "./../../assets/Poster.png";
import { MovieContext } from "../../contexts/MovieContextType";

let result: any;

async function getMovie(page: number | undefined) {
  try {
    const response = await fetch(
      BASE_URL + "popular?" + API_KEY + "&" + language + "&" + pageNumber + page
    );
    const data = await response.json();
    result = data.results;
  } catch (error) {
    console.log(error)
  }
}

const MovieContent: React.FC = () => {
  const { page, movie } = useContext(MovieContext);
  let currentMovie;
  getMovie(page);
  if (movie !== undefined) {
    currentMovie = result[movie];

    return (
      <Container>
        <img src={`${IMG_URL}${currentMovie.poster_path}`} alt="movie poster" />
        <InfoMovie>
          <Title>{currentMovie.title}</Title>
          <Description>{currentMovie.overview}</Description>
        </InfoMovie>
      </Container>
    );
  } else {
    return (
      <>
      </>
    );
  }
};

export default MovieContent;
