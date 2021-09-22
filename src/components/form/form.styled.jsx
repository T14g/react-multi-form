import styled from 'styled-components';

export const FormContainer =  styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 15px;
    padding-top: 25px;
    background: #95232a;
    border-radius: 25px;
    color: #fff;

    &:after{
        display: table;
        content : "";
        clear: both;
    }

    select{
        height: 30px;
        padding-left: 5px;
        border: 1px #000 solid;
        border-radius: 10px;
    }
`
export const Container = styled.div`

`

export const Row = styled.div`
    display: flex;
    margin-bottom: 5px;
`

export const Column = styled.div`
    width: 50%;

    &.col-obs{
        width: 100%;
        padding: 5px;
    }

    &.col-aniversarios{
        width: 100%;
        padding: 5px;

        label, select{
            display: inline;
        }
        
        select{
            max-width: 200px;
        }

        textarea{
            margin-top: 5px;
        }
    }

    &.renew-col{
        width: 100%;

        select,input[type="text"]{
            width: initial;
            display: inline;
        }
        input[type="text"]{
            width: 200px;
        }
    }

    textarea{
        max-width: 780px;
    }
`

export const Label = styled.label`
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    font-weight: 900;
`

export const InnerContainer = styled.div`
    margin: 0 auto;

    input, select, label{
        
    }
    input[type="text"], 
    input[type="tel"],
    input[type="email"], 
    input[type="date"], 
    select{
        width: 100%;
        display: block;
        max-width: 385px;
        padding: 0px;
        margin: 0;
        height: 40px;
        padding-left: 5px;
        border: 1px #000 solid;
        margin: 5px;
        border-radius: 10px;
    }
`

export const Submit = styled.button`

`