import { createSlice } from "@reduxjs/toolkit"

const users = createSlice({
  name: "users",
  initialState: [{
    id: 0,
    name: " ",
    email: " ",
    password: " ",
  }],
  reducers: {
    getUsersSlice: (state, action) => {
      state = action.payload; 
      return state
    },
    addUsersSlice: (state, action) => {
      state.push(action.payload)
      return state
    },
    editUsersSlice: (state, action) => {
      state = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
      return state
    },
    // deleteUsersSlice: (state, action) => {
    //   state = state.filter((item) =>
    //     item.id !== action.payload)
    //   return state
    // },
    deleteUsersSlice: (state, action) => {
      state = state.filter((item) => {
        console.log("ID", JSON.stringify(item.id),"action.payload",  JSON.stringify(action.payload))
        return item.id !== action.payload   
      })
    },
  },
})

export const { getUsersSlice, addUsersSlice, editUsersSlice, deleteUsersSlice } = users.actions;
export default users.reducer;
