import React from 'react'
import { Link } from 'react-router-dom'

function Products(props){

  return(
    <div className='container'>
      <h1>Products</h1>
      <ul className='list-group'>
        <li className='list-group-item'>
        {props.products.map(product => (
          <Link to={`/product/${product.id}`}>
            <h6>{product.title}</h6>
            <img width='100' height='100' src={product.image} alt={product.title}/>
            <p>{ product.category }</p>
          </Link>
        ))}
        </li>
      </ul>
    </div>
  )
}
export default Products;