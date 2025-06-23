import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  outline: none;
  border: 1px solid #b6ddd3;
`;

export const Button = styled.button`
    border: none;
    background: #b3ebdd;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
       background: #91b1a9; 
    }
    &:disabled{
        background:#b9ccc7;
        cursor: default;
    }

`;