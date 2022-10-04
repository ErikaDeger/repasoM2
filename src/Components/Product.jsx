import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  let { id } = props
  return (
    <div>

      <h2> Products name: <Link to={`/product/${id}`}>{props.name} </Link></h2>

      <h4> Price:{props.price} </h4>
    </div>
  )
}

export default Product