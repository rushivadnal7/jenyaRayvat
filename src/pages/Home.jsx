import React, { useCallback } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
  const navigate = useNavigate()
  const buttonHandler = useCallback(()=>{
    navigate('/products')
  })
  return (
    <>
    <Navbar/>
    <HomeWrapper>
      <h1>HOME</h1>
      <Button onclick={buttonHandler} />
    </HomeWrapper>
    </>
  )
}

export default Home

const HomeWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

`