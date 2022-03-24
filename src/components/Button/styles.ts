import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;
  border-radius: 4px;
  
  background-color: var(--subtitle);
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  margin-top: 32px;

  > img {
    width: 32px;
  }

  > p {
    font-size: 12px;
    font-weight: bold;
    color: #000;

    margin-left: 16px;
  }

  &:hover {
    background-color: var(--title);
  }
`