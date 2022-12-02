import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading";
import getConfig from "../../utlis/getConfig";

export const isLoadingSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action)=> {
        return action.payload
    }
  }
});

export const getFavoritesThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig())
        .then(res => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)))
} 


export const { setFavorites } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;