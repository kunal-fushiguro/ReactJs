import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const product = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addFn: (state, action) => {
      state.value.push(action.payload);
    },
    rmFn: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFn, rmFn } = product.actions;
export default product.reducer;
