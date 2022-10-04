import React from 'react'
import { addProduct } from '../Redux/actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Create = ({ add }) => {
  const initialState = {
    name: "",
    price: "",
    location: "",
    seller: ""
  }
  let history = useHistory()
  let [input, setInput] = React.useState(initialState)
  let handleOnchange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  let handleOnSubmit = (e) => {
    e.preventDefault()
    add(input)
    setInput(initialState)
    history.push('/')
  }

  return (
    <div>
      <h2>
        ADD NEW PRODUCT
      </h2>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Products name</label>
          <input
            type='text'
            name='name'
            value={input.name}
            onChange={e => handleOnchange(e)}
          />
        </div>
        <div>
          <label>Products price</label>
          <input
            type='text'
            name='price'
            value={input.price}
            onChange={e => handleOnchange(e)}
          />
        </div>
        <div>
          <label>Products location</label>
          <input
            type='text'
            name='location'
            value={input.location}
            onChange={e => handleOnchange(e)}
          />
        </div>
        <div>
          <label>Products seller</label>
          <input
            type='text'
            name='seller'
            value={input.seller}
            onChange={e => handleOnchange(e)}
          />
        </div>
        <input
          type='submit'
          value="ADD"
          disabled={!input.name ? true : false}
        />
      </form>
    </div>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    add: input => dispatch(addProduct(input))
  }
}
export default connect(null, mapDispatchToProps)(Create)