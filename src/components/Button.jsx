import React from 'react'
import styled from 'styled-components'

const Button = ({onclick}) => {
  return (
    <ButtonWrapper onClick={onclick}>fetch products</ButtonWrapper>
  )
}

export default Button


const ButtonWrapper = styled.button`
    padding: 0.4rem 2rem;
    border: none;
    border-radius: 15px;
    background-color: gray;
    transition: all 0.4s ease;
     &:hover{
        background-color: lightgray;

     }
`