// import { Button, TextField ,FormControlLabel,Switch,Typography,Alert, CssBaseline} from "@mui/material";
import * as React from 'react';
import Login from './pages/Auth/Login';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import PublicRoute from './routes/PublicRoute';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';



// import Paper from '@mui/material/Paper';


function App() {
  return (     
    <BrowserRouter > 
      <CssBaseline/>
        <PublicRoute/>
    </BrowserRouter>
  );
}

export default App;
