import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin-top: 2rem;

  img {
    width: 171px;
    height: 243.77px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoMovie = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 423px;
  width: 100%;

  margin-left: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const Title = styled.div`
  color: var(--title);
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled.div`
  color: var(--subtitle);
  font-size: 1rem;

  margin-top: 0.5rem;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
