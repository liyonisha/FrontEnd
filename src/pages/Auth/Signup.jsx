import React from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Paper, TextField, Typography } from '@mui/material';
import{useNavigate} from "react-router-dom"

const validationSchema = object().shape({
  first_name: string().required('Required!').min(3, 'At least 3 characters'),
  last_name: string().required('Required!').min(3, 'At least 3 characters'),
  email: string().required('Required!').email('Invalid email'),
  password: string().required('Required!').min(6, 'Password must have at least 6 characters'),
});

const Signup = () => {
  const navigate= useNavigate()
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <AuthLayout>
      <form style={{ margin: 'auto' }} onSubmit={handleSubmit}>
        <Paper
          sx={{
            display: 'flex',
            minWidth: 400,
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            p: '25px',
            borderRadius:"10px"

          }}
          elevation={5}
        >
          <Typography variant='h2' padding={4} textAlign='center'>
            SIGNUP
          </Typography>
          <TextField
            label='First name'
            variant='outlined'
            name='first_name'
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={touched.first_name && errors.first_name}
          />

          <TextField
            label='Last name'
            variant='outlined'
            name='last_name'
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={touched.last_name && errors.last_name}

          />

          <TextField
            label='Email'
            variant='outlined'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            label='Password'
            variant='outlined'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          <Button variant='contained' type='submit' size='large'>
            {isSubmitting ? 'Loading...' : 'Sign up'}
          </Button>
          <Button variant='outlined' onClick={()=>navigate("/login")} >
            Go to login
          </Button>
        </Paper>
      </form>
    </AuthLayout>
  );
};

export default Signup;
