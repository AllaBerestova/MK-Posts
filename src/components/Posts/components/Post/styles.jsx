import { Link } from "react-router-dom";
import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  min-width: 300px;
  flex: 1 1;
`;
export const Image = styled.img `
max-width: 200px;

`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  max-width: 250px;
`;

