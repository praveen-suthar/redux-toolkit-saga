import { createSlice } from "@reduxjs/toolkit"

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state, action) => {
      state.cats = action.payload
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = true
      state.cats = action.payload
    },
  }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions;
export default catSlice.reducer;