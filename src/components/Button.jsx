import React from 'react'
import styled from 'styled-components'

const Button = ({ onclick, text }) => {
  return (
    <ButtonWrapper onClick={onclick}>{text}</ButtonWrapper>
  )
}

export default Button


const ButtonWrapper = styled.button`
     background: #ff6b6b;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ff4757;
  }
`