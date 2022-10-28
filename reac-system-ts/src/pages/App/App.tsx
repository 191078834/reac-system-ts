import * as React from 'react';
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Navbar from '../../componments/Navbar/Navbar'



const App: React.FC<{}> = () => {

  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>

  )
}

export default App
