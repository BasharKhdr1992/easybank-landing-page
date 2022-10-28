import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 2rem;
  width: max-content;
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%),
    hsl(192, 70%, 51%)
  );
  background-repeat: no-repeat;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-weight: 400;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export default StyledButton;
