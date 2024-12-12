import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./App.css"
import Grid from '@mui/material/Grid';
import SignUp from "./components/SignUp";
import TableData from "./components/TableData";
import { getCatsFetch } from "./redux/slices/catSlice";

function App() {

const cats = useSelector((state) => state.catSlice.cats)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])
  
  console.log("CATS", cats)

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <SignUp/>
        </Grid>

        <Grid item xs={12} md={8} lg={6}>
        <TableData/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
