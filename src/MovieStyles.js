import styled from "styled-components";
import { motion } from "framer-motion";

export const MoviesContainer = styled(motion.div)`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  transition: all 0.5s ease-in;
  margin: 0 1.8rem;
`;
export const MoviesCard = styled(motion.div)`
  /* width: 200px; */
  border-radius: 1rem;
  overflow: hidden;
`;

export const MovieTitle = styled.p`
  background: #e76f51;
  color: #fff;
  padding: 20px;
  font-weight: 400;
  font-size: 1rem;
`;

export const MovieThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
