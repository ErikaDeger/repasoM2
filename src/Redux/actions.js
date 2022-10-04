import { ADD_PRODUCT, GET_PRODUCTS, GET_BY_ID, DELETE, LOADING, CLEAR } from './actionsTypes'


//las acciones son objetos {type: ADD_PRODUCT, payload: info extra}
//acctionCreators son funciones que crean funciones

export function addProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function deleteProduct(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function loading() {
    return {
        type: LOADING,
       
    }
}

export function clear() {
    return {
        type: CLEAR,     
    }
}


export function getProduct() {
    return function (dispatch) { //thunk asincrono . fetch. dispatth
        dispatch (loading())
        return fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res
                })
            })

    }
}

export function getById(productId) {
    return function (dispatch) { //thunk asincrono . fetch. dispatth
        dispatch (loading())
        return fetch(`https://jsonplaceholder.typicode.com/photos${productId}`) //concateno ${}el producto con su id.
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_BY_ID,
                    payload: res
                })
            })

    }
}