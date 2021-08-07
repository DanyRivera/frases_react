import styled from '@emotion/styled';
import React from 'react';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 0;

    @media screen and (min-width: 768px) {
        margin-top: 10%;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 7rem;
            color: #000;
            position: absolute;
            left: 0;
            top: -2rem;
        }
    }   

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;


const Frase = ({ frase }) => {

    if(Object.keys(frase).length === 0) return null;

    const { author, quote } = frase;

    return (

        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>-{author}</p>
        </ContenedorFrase>

    );
}

export default Frase;
