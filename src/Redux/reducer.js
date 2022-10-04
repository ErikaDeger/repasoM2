import { ADD_PRODUCT, GET_PRODUCTS, GET_BY_ID, DELETE, LOADING, CLEAR } from './actionsTypes'

const inicialState = {
    products: [],
    productDetail: {},
    localProducts: [],
    loading: false
}
let localId= 10000

export default function reducer(state = inicialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
return{
    ...state,
    localProducts:[...state.localProducts,{...action.payload, id: localId++} ]
}

case GET_PRODUCTS:
return{
    ...state,
    loading: false,
    products: action.payload
}
    case GET_BY_ID:
        return{
            ...state,
            loading: false,
            products: action.payload
        }

        case DELETE:
return{
    ...state,
    localProducts: state.localProducts.filter (el => el.id !== action.payload)
}
case LOADING:
return{
    ...state,
    loading: true
}

case CLEAR:
return{
    ...state,
    productDetail: {}
}

        default:
            return state;
    }
}