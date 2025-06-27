import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../ui/Container/styles";

export const CustomContainer = styled(Container)`
  background: #2b2d42;
  width: 100vw;
  max-width: 100vw;
`;

export const Menu = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  background: #2b2d42;
`;
export const MenuItem = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #FEFEFD;
  padding: 15px 15px;
  &.active {
    background: #8d99ae;
  }
  &:hover {
    background: #8d99ae;
  }
`;

export const ExitButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background: #FEFEFD;
  &:hover {
    background: #f5cb5c;
  }
`