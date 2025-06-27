import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: #f5cb5c;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #333533;
  }
  &:disabled {
    background: #eedba7;
    cursor: default;
  }
`;
