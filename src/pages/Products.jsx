import React, { useEffect } from 'react'
import { ProductWrapper } from '../wrappers/product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'

const Products = () => {
    const dispatch = useDispatch()
    const {items , loading , error} = useSelector((state) => state);

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(loading) return <p>LOADING PRODUCTS.....</p>;
    if(error) return <p>Error</p>

  return (
    <>
        <ProductWrapper>
            <h2>Product List</h2>
            <ul>
                {
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