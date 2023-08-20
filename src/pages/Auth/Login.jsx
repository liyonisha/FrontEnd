
import {  Button, Paper, TextField, Typography } from '@mui/material';
import AuthLayout from '../../layout/AuthLayout';

const Login = () => {
  return (
 <AuthLayout>
 <form  style={{margin:"auto"}}>
        <Paper
         sx={{display:"flex", minWidth:400,flexDirection:"column",gap:"20px"  , justifyContent:"center",
         p:"15px"}}
         
         >
          <Typography variant='h2' padding={4} textAlign="center" >
           LOGIN
            </Typography>
            <TextField/>
            <TextField/>
            <Button variant='contained'>
              LOGIN
            </Button>
        
        </Paper>
      </form>
 </AuthLayout>
     
      
  );
};

export default Login;
