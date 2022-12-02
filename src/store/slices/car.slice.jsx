import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading";
import getConfig from "../../utlis/getConfig";

export const carSlice = createSlice({
  name: "car",
  initialState: [],
  reducers: {
    setCar: (state, action)=> {
        return action.payload
    }
  }
});

export const getCarsThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
        .then(res => dispatch(setCar(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)))
} 

export const createFavoritesThunk = (products) => dispatch => {
  dispatch(setIsLoading(true));
  return axios.post("https://e-commerce-api.academlo.tech/api/v1/cart", products , getConfig())
      .then(res => dispatch(getCarsThunk()))
      .finally(() => dispatch(setIsLoading(false)))
} 


export const deleteProductsThunk = (id) => dispatch => {
  dispatch(setIsLoading(true));
  return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}` , getConfig())
      .then(res => dispatch(getCarsThunk()))
      .finally(() => dispatch(setIsLoading(false)))
} 



export const checkoutThank = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases", {} , getConfig())
      .then(res => dispatch(setCar([])))
      .finally(() => dispatch(setIsLoading(false)))
} 






export const { setCar } = carSlice.actions;

export default carSlice.reducer;