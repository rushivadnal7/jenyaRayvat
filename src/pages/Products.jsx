import React, { useEffect } from 'react';
import { ProductWrapper } from '../wrappers/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import Navbar from '../components/Navbar';
import styled, { keyframes } from 'styled-components';

const Products = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <LoaderWrapper><Spinner /></LoaderWrapper>;
    if (error) return <p>Error</p>;

    return (
        <>
            <Navbar />
            <ProductWrapper>
                <h2>Product List</h2>
                <ul>
                    {items.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price : {product.price}</p>
                        </li>
                    ))}
                </ul>
            </ProductWrapper>
        </>
    );
};

export default Products;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid #ff6b6b;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
