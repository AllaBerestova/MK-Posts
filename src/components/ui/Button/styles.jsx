import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: #91b1a9;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
       background: #434b49; 
    }
    &:disabled{
        background:#bdccc8;
        cursor: default;
    }

`;