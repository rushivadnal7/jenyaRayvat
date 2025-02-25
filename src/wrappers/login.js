import styled from "styled-components";

export const LoginWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;

    .container{
        width: clamp(500px, 60% , 600px);
        height: 60%;
        background-color: lightgray;
        box-shadow: 2px 5px 8px rgba(0,0,0,0.3);
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 10px;

        
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            button{
                padding: 0.4rem 2rem ;
                background-color: aliceblue;
                border: none;
                border-radius: 5px;
                transform: transform 0.4s ease;
                &:hover{
                    transform: scale(0.95);
                }
            }
        }
    }

`