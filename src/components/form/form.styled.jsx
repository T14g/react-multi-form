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


`
export const Container = styled.div`

`

export const Row = styled.div`

`

export const InnerContainer = styled.div`
    max-width: 636px;
    margin: 0 auto;

    input, select{
        max-width: 200px;
        width: 100%;
        display: block;
        float:left;
        padding: 0p;
        margin: 0;
        height: 40px;
    }
    input[type="text"], input[type="tel"], input[type="date"], select{
        padding: 0;
        border: 1px #000 solid;

        margin: 5px;
    }
    select{
        padding: 0;
        height: 42px;
    }
`