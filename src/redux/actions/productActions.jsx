import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from '../constants/productConstants'

export const fetchProductsRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  }
}

export const fetchProductsSuccess = (data) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: data,
  }
}

export const fetchProductsFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload: error,
  }
}

export const listProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest)
    axios
      .get('https://fakestoreapi.com/products/category/electronics')
      .then((response) => {
        const data = response.data
        dispatch(fetchProductsSuccess(data))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
      })
  }
}

export const fetchProductRequest = () => {
  return {
    type: PRODUCT_DETAILS_REQUEST,
  }
}

export const fetchProductSuccess = (data) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  }
}

export const fetchProductFailure = (error) => {
  return {
    type: PRODUCT_DETAILS_FAILURE,
    payload: error,
  }
}

export const listProductDetails = (id) => {
  return (dispatch) => {
    dispatch(fetchProductRequest)
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const data = response.data
        dispatch(fetchProductSuccess(data))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))
      })
  }
}
