import styled from "styled-components";

export const Button = styled.button`
  background: #fff;
  color: rgb(65, 98, 168);
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: 1px solid black;

  .active,
  :hover {
    background: rgb(65, 98, 168);
    color: #fff;
    border: none;
  }
`;
