import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import { getProduct, getById, deleteProduct } from '../Redux/actions'
import { Link } from 'react-router-dom'

function Products(props) {
  let [productId, setProductId] = React.useState("")
let handleOnClick = (e,id) => {
  props.delete(id)
}
  return (
    <div>
      <Link to='/products'> PRODUCTOS DE LA API</Link>
<br/>
{props.loading ? <img src='https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webpñ' alt='"Cargando...'/> :props.products?.map(el =>(
  <div>
  <Product
    key={el.id}
    id={el.id}
    name={el.title}
    price={el.id}
  />
  <button onClick={(e)=>handleOnClick(e, el.id)}>DELETE</button>
  </div>
))}
<button onClick= {() => {props.getProduct()}}>GET API</button>
    </div>
  )
}

function mapStateToProps (state){
return{
  products: state.products,
  loading: state.loading
}
}
function mapDispatchToProps (dispatch){
return{
  delete: id => dispatch(deleteProduct (id)),
  getById: productId => dispatch (getById(productId)),
  getProduct:() => dispatch(getProduct())
}
}

export default connect (mapStateToProps, mapDispatchToProps)(Products)

