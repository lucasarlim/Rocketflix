import React from "react";

import { Container } from "./styles";
import shuffle from "./../../assets/shuffle.svg";

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => (
  <Container onClick={onClick}>
    <img src={shuffle} alt="Shuffle Icon" />

    <p>{children}</p>
  </Container>
);

export default Button;
