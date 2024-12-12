import { Container, Input, Button } from "@mui/material"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slices/user";
import { addUsersSlice, editUsersSlice } from '../redux/slices/users';
import { nanoid } from "nanoid";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";


const SignUp = () => {

  const user = useSelector(state => state.user)  
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(setUserSlice({ ...user, [e.target.name]: e.target.value }))
  }
  
  console.log("USERS", user);

  const onSubmitHandler = (e) => { 
    e.preventDefault()
    // user.id === 0 ? dispatch(addUsersSlice({ ...user, id: nanoid(5) })) : dispatch(editUsersSlice(user));
    
    user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(5) } })
      :dispatch({ type: UPDATE_USER_BY_ID, user});
    
    dispatch(setUserSlice({
      id: 0,
      name: "",
      email: "",
      password: "",
    }))
  }

  // post API/ create

  return (
    <div>
      <Container spacing={2}>
        <form onSubmit={onSubmitHandler}>
        <Input
          onChange={onChangeHandler}
          value={user.id}
          name="id"
          placeholder="ID"
          fullWidth
          disabled
          sx={{ m: 2 }}
          type="number"
        />
        <Input
          onChange={onChangeHandler}
          value={user.name}
          name="name"
          placeholder="Enter your Name"
          fullWidth
          sx={{ m: 2 }}
          type="text"
        />
        <Input
          onChange={onChangeHandler}
          value={user.email}
          name="email"
          placeholder="Enter your Email"
          fullWidth
          sx={{ m: 2 }}
          type="email"
        />
        <Input
          onChange={onChangeHandler}
          value={user.password}
          name="password"
          placeholder="Enter your Password"
          fullWidth
          sx={{ m: 2 }}
          type="password"
          />
          <Button fullWidth variant="contained" type="submit" sx={{ m: 2 }}
        >
          Sumbit
        </Button>
        </form>
        
      </Container>
    </div>
  )
}

export default SignUp;
