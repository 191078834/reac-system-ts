import * as React from 'react';
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Navbar from '../../componments/Navbar/Navbar'



const App=() => {

  return (
    <Grid container={true}>
      <Navbar />
      <Outlet />
    </Grid>

  )
}

export default App
