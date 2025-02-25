import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const ProductWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    text-align: center;
    ul{
        width: 100%;
        height: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;


        li{
            position: relative;
            width: max-content;
            height: max-content;
            list-style: none;
            background-color: beige;
            padding: 1rem;
            margin: 1rem;
            border-radius: 15px;
            animation: ${fadeIn} 2s ease-in-out;

            img{
                position: absolute;
                top: 0;
                left: 0;
                z-index: -100;
                width: 100%;
                height: 100%;
                border-radius: 15px;
                opacity: 0.5;
            }
        }
    }
`
