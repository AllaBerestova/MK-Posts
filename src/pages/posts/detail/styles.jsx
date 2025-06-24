import styled from "styled-components";

export const Image = styled.img`
  max-width: 200px;
  float: left;
  margin-right: 15px;
`;
export const Text = styled.div`
  font-size: 15px;
`;
export const LinkWrapper = styled.div`
  align-items: center;
  margin: 15px 0 0 0;
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;
`;
export const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  padding: 5px 15px;
  color: black;
  cursor: pointer;
  &:hover {
    background: #7a0c0c;
    color: white;
    border: 1px solid #7a0c0c;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
`