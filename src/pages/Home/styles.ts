import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 126px;
  padding: 0 2rem;

  > p {
    max-width: 381px;
    width: 100%;

    font-size: 14px;
    color: var(--title);
    text-align: center;

    margin-top: 24px;
  }
` 

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  > img {
    width: 84px;
  }

  > h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    color: var(--title);
    margin-top: 8px;
  }
`
