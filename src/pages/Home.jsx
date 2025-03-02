import React, { useCallback } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const buttonHandler = useCallback(() => {
    navigate('/products');
  }, [navigate]);

  const user = useSelector((state) => state.auth.user);
  const displayUser = user ? user.email : 'Please login';

  return (
    <>
      <Navbar />
      <HomeWrapper>
        <Content>
          <Title>HELLO - {displayUser}</Title>
          <SubText>Explore our exclusive collection now.</SubText>
          <Button onClick={buttonHandler} text={'browse products'}/>
        </Content>
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FFD700, #FFA500);
    color: white;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

