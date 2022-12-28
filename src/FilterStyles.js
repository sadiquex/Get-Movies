import styled from "styled-components";

export const FilterContainer = styled.div`
  /* margin: 20px auto; */
`;

export const Button = styled.button`
  background: #fff;
  color: #e76f51;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin: 1.8rem 0.8rem;

  .active,
  :hover {
    background: rgb(65, 98, 168);
    background: #e76f51;
    color: #fff;
    border: none;
  }
`;
