import React from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import {deleteProduct} from '../Redux/actions'
import {Link} from 'react-router-dom'

const LocalProducts = () => {
    let dispatch = useDispatch()
  let local = useSelector((state) => state.localProducts)
  let handleOnClick= (e, id) => {dispatch(deleteProduct(id))}
  return (
    <div>
      <Link to= '/local'>PRODUCTOS PROPIOS</Link>
      <hr/>
    {local.length === 0 ? "SIN INVENTARIO" : local.map((el) => (
        <div>
        <Product
          key={el.id}
          id={el.id}
          name={el.name}
          price={el.price}
        />
        <button onClick={(e)=>handleOnClick(e, el.id)}>DELETE</button>
        </div>
      ))}
    </div>
  )
  
}

export default LocalProducts