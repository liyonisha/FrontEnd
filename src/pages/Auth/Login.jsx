
import {  Button, Paper, TextField, Typography } from '@mui/material';
import AuthLayout from '../../layout/AuthLayout';
import { useFormik } from 'formik';
import { object,string } from 'yup';
import {useNavigate}from "react-router-dom"

const validationSchema=object().shape({
  email:string().required("requires !!").email("Invalid email"),
  password :string().required("required"),
});

const Login = () => {
  const navigate =useNavigate();

const {
  values,errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}=useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  validationSchema,
  onSubmit: (values) => {
    // Handle form submission here
    console.log(values);
  },


});

  return (
 <AuthLayout>
 <form  style={{margin:"auto" }} onSubmit={handleSubmit}>
        <Paper
         sx={{display:"flex", minWidth:400,flexDirection:"column",gap:"20px"  , justifyContent:"center",
         p:"15px" }}
         
         >
          <Typography variant='h2' padding={4} textAlign="center" >
           LOGIN
            </Typography>
            <TextField 
            label= "Email"
            name="email"  
            variant='outlined'
            type='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email}
            />
            <TextField 
            label= "Password"
            name="password"
            variant='outlined'
            type='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password}

            />
            <Button variant='text'  onClick={()=>navigate("/forgotpassword")}>
              Forgot password
            </Button>
            <Button variant='contained' type='submit'>
            {isSubmitting ? 'Loading...' : 'login'}            
            
            </Button>
            <Button variant='text' onClick={()=>navigate("/signup")}>
            Sign up
            </Button>
        
        </Paper>
      </form>
 </AuthLayout>
     
      
  );
};

export default Login;
