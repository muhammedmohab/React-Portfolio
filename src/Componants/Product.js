import React from 'react'
import {useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';

function Product() { 
  const {id} = useParams();
  const {loading, data, error} = useFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div className='container'>
      <h1>Product</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && <div>
        <h2>{data.title}</h2>
        <img width='100' height='100' src={data.image} alt={data.title}/>
        <p>{ data.price }</p>
        <p>{ data.description }</p>
      </div>}
    </div>
  )
}
export default Product;