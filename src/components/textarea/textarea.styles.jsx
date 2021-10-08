import styled from "styled-components";

export const TextareaStyled = styled.textarea`
    width: 100%;
    height: 150px;
    border-radius: 10px;
    resize: none;
    padding: 5px;

    @media(max-width: 850px){
        max-width: 430px;
    }

    @media(max-width: 489px){
        max-width: 265px;
    }
`