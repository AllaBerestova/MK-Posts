import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    gap: 10px;
    font-size: 18px;
    justify-content: center;
    margin-top: 40px;
`
export const Page = styled.span`
    cursor: pointer;
    padding: 4px;
    border-bottom: 1px solid black;
    &:hover{
        color: #f5cb5c;
        border-bottom: 1px solid #f5cb5c;
    }
`