import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/car.slice";
import favoritesSlice from "./slices/favorites.slice";
import  isLoadingSlice  from "./slices/isLoading";
import productSlice from "./slices/product.slice";

export default configureStore({
    reducer: {
        product: productSlice,
        isLoading: isLoadingSlice,
        favorites: favoritesSlice,
        cars: carSlice
    }
});