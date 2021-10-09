import styled from 'styled-components';

export const FormStyled =  styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 35px 15px;
    background: #95232a;
    border-radius: 25px;
    color: #fff;
    font-family: "Montserrat",sans-serif;
    font-weight: 400;

    @media(max-width: 850px){
        max-width: 450px;
    }

    @media(max-width: 489px){
        max-width: 272px;
    }

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
export const Container = styled.div``

export const Row = styled.div`
    display: flex;
    margin-bottom: 5px;

    @media(max-width: 850px){
        display: block;
    }

    .renew-seguradora{
        @media(max-width: 890px){
            max-width: 270px !important;
            width: 100%;
        }
    }

    input[name="renew-seguradora"],
    select
    {
        max-width: 170px;
        padding: 0px;
        height: 40px;
        padding-left: 5px;
        border: 1px #000 solid;
        margin: 5px;
        border-radius: 10px;

        @media(max-width: 890px){
            margin: 0;
            margin-bottom: 10px;
        }
    }

    &.row-top{
        .label-tipo{
            line-height: 45px;

            @media(max-width: 890px){
                padding-left: 0;
            }
        }
    }
`

export const Column = styled.div`
    width: 50%;

    @media(max-width: 850px){
        width: 100%;
    }

    &.col-obs{
        width: 100%;
        padding: 5px;

        @media(max-width: 850px){
            padding: 0;
        }
        
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
        margin-left: 5px;
        position: relative;

        @media(max-width: 890px){
            margin-left: 0;
        }

        .error-renew{
            position: absolute;
            top: -18px;
            right: 200px;
            font-size: 12px;
        }

        .error-seguradora{
            position: absolute;
            top: -18px;
            right: 15px;
            font-size: 12px;
        }
    }

    textarea{
        max-width: 780px;

        @media(max-width: 850px){
            max-width: 430px;
        }

        @media(max-width: 489px){
            max-width: 265px;
        }
    }
`

export const Label = styled.label`
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    font-weight: 900;
`

export const Error = styled.div`
    padding-left: 5px;
    font-size: 14px;
    color: orange;
    display: none;
`

export const InnerContainer = styled.div`
    margin: 0 auto;

    input[type="text"], 
    input[type="tel"],
    input[type="email"], 
    input[type="date"], 
    select{
        width: 100%;
        display: block;
        max-width: 375px;
        padding: 0px;
        margin: 0;
        height: 40px;
        padding-left: 5px;
        border: 1px #000 solid;
        margin: 5px;
        border-radius: 10px;

        @media(max-width: 850px){
            max-width: 440px;
            margin: 0 auto;
        }

        @media(max-width: 489px){
            max-width: 270px;
        }
    }
`

export const Submit = styled.button`
    width: 100%;
    display: block;
    max-width: 375px;
    padding: 7px 15px;
    margin: 0 auto;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;

    @media(max-width: 489px){
        max-width: 200px;
    }

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`