import styled from 'styled-components';

export const FormContainer =  styled.div`
    max-width: 800px;
    margin: 0 auto;
    border: 2px #000 solid;
    padding: 10px 15px;

    &:after{
        display: table;
        content : "";
        clear: both;
    }

    input{
        width: 47.6%;
        display: block;
        float: left;
    }
`
export const Container = styled.div`

`