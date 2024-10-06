import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: " loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    }, 
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



//Thunks : The word thunks is a programming term that means a piece of code that does some delayed work. Rather than execute some login now, we can write a function body or code that can be used to perform work latter
export function fetchProducts() {
  return async function fetchProductThunks(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data)
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      console.log(error);
    }
  };
}
