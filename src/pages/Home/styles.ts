import styled from "styled-components";

export const Container = styled.div`

  width: 100vw;
  height: 100%;

  background: var(--background);
  background-size: cover;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  > p {
    max-width: 381px;
    width: 100%;

    font-size: 14px;
    color: var(--title);
    text-align: center;

    margin-top: 1.5rem;
  }
` 

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0 1rem;

  > img {
    position: relative;
    width: 5.25rem;
  }

  > h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    color: var(--title);
    margin-top: 0.5rem;
  }
`
