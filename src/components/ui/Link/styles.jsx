import styled from "styled-components";
import { Link } from "react-router-dom";

export const SimpleLink = styled(Link)`
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;
  padding: 5px 5px;
  max-width: 200px;
  &:hover {
    color: #f5cb5c;
    border-bottom: 1px solid #f5cb5c;
  }
`;
