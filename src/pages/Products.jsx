import React, { useEffect } from 'react'
import { ProductWrapper } from '../wrappers/product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'

const Products = () => {
    const dispatch = useDispatch()
    const { items = [], loading, error } = useSelector((state) => state || {});

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <p>LOADING PRODUCTS.....</p>;
    if (error) return <p>Error</p>

    const dummyArray = [
        { id: 1, name: "Product 1", price: 599 , img : 'https://picsum.photos/200/300' },
        { id: 2, name: "Product ", price: 599 , img : 'https://picsum.photos/200/300' },
        { id: 3, name: "Product 3", price: 599 , img : 'https://picsum.photos/200/300' },
        { id: 4, name: "Product 4", price: 599 , img : 'https://picsum.photos/200/300' },
        { id: 5, name: "Product 5", price: 599 , img : 'https://picsum.photos/200/300' },
    ]

    return (
        <>
            <ProductWrapper>
                <h2>Product List</h2>
                <ul>
                    {items.length === 0 ? dummyArray.map((product) => (
                        <li key={product.id}>
                            <img src={product.img} alt="image" />
                            <h3>{product.name}</h3>
                            <p>Price : {product.price}</p>

                        </li>
                    )) :
                        items.map((product) => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>Price : {product.price}</p>
                            </li>
                        ))
                    }
                </ul>
            </ProductWrapper>
        </>
    )
}

export default Products