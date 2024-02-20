// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {STATUS} from "../utils/status";

// const initialState = {
//   products: [],
//   productsStatus: STATUS.IDLE,
//   productDetail: [],
//   productDetailStatus: STATUS.IDLE,
// };

// export const getProducts = createAsyncThunk("getProducts", async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json(); 
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// });

// export const getDetailsProduct = createAsyncThunk(
//   "getDetailsProduct",
//   async (id) => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Use backticks for template literal
//       const data = await response.json(); 
//       return data;
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       throw error;
//     }
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state, action) => {
//         state.productsStatus = STATUS.LOADING;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.productsStatus = STATUS.SUCCESS;
//         state.products = action.payload;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.productsStatus = STATUS.FAIL;
//       })
//       .addCase(getDetailsProduct.pending, (state, action) => {
//         state.productDetailStatus = STATUS.LOADING;
//       })
//       .addCase(getDetailsProduct.fulfilled, (state, action) => {
//         state.productDetailStatus = STATUS.SUCCESS;
//         state.productDetail = action.payload;
//       })
//       .addCase(getDetailsProduct.rejected, (state, action) => {
//         state.productDetailStatus = STATUS.FAIL;
//       });
//   },
// });

// export default productSlice.reducer;
