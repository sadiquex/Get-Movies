import styled from "styled-components";

export const MoviesContainer = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const MoviesCard = styled.div`
  /* width: 200px; */
  border-radius: 1rem;
  overflow: hidden;
`;

export const MovieTitle = styled.p`
  background: red;
  padding: 20px;
  font-weight: 400;
  font-size: 1rem;
`;

export const MovieThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
