
import React from 'react'
import AuthLayout from '../../layout/AuthLayout';
import { Button, Paper, TextField, Typography } from '@mui/material';
import Amazon from "../../images/img.png"
import {  useFormik } from 'formik';
import {object,string} from "yup"
import {useNavigate} from "react-router-dom";
const validationSchema= object().shape({
      email:string().required("required !!").email("invalided email"),

});
const ForgotPassword = () => {
      const navigate = useNavigate();
      const {
            values,
            touched,
            errors,handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
      }=useFormik({
            initialValues:{
                  email:"",
            },
            validationSchema

      });
  return (
   <AuthLayout>
    <form style={{margin:"auto"}} onSubmit={handleSubmit}>
        <Paper sx={{display:"flex", minWidth:400,flexDirection:"column",gap:"20px"  , justifyContent:"center",
         p:"15px"}}>
            <img  src={Amazon} alt='img' style={{width:"100%" , height:"100px"}}/>
            <Typography  variant='h4                                                                                                                                                                                                                                                                                                                `
            ' padding={4} textAlign="center">
            Forgot password
              </Typography>
        <p> Enter your registered email below to receive password reset code </p>
        <TextField 
        label="email" 
        variant='outlined'
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.email && errors.email}
        
        />
         <Button 
         type="submit" 
         variant='contained' 
          >
            {isSubmitting ? 'Loading...' : 'SendLink'}    
               
         </Button>
         <Button 
         type="submit"
          variant='outlined'
          onClick={()=> navigate("/login")}  >
               Go to Login
         </Button>
        </Paper>
    </form>
   </AuthLayout>
  );
};

export default ForgotPassword
