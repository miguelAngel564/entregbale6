import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading";

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
        return action.payload
    }
  }
});

export const getProducThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)))
} 

export const filterProductsThunk = ( id ) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)))
} 


export const filterHeadlineThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=samsung${inputSearch}`)
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)))
} 




export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
