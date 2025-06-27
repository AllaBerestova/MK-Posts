import styled from "styled-components";
import { Button } from "../../../components/ui/Button/styles";

export const Image = styled.img`
  max-width: 200px;
  float: left;
  margin-right: 15px;
`;
export const Text = styled.div`
  font-size: 18px;
  max-width: 700px;
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
  background: #FEFEFD;
  padding: 10px;
  max-width: 150px;
  width: 100%;
  color: black;
  cursor: pointer;
  &:hover {
    background: #d90429;
    color: white;
    border: 1px solid #d90429;
  }
`;
export const CustomBtn = styled(Button)`
  max-width: 150px;
  width: 100%;
  background: #FEFEFD;
  border: 1px solid black;
  color: black;
  &:hover{
    color:white;
  }
`
export const ModalContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
`