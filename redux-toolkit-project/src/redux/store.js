import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./ProductSlice";
  

  export default configureStore({
    reducer:{
        categories:categorySlice,
        products:productSlice,
    },
  })