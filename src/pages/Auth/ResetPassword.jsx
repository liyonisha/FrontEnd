import React from "react";
import { useFormik } from "formik";
import { object, string ,ref} from "yup";
import { TextField, Typography, Paper, Button } from "@mui/material";
import AuthLayout from "../../layout/AuthLayout";

const validationSchema = object().shape({
  new_password: string().required("Required!!").min(6, "Password must have at least 6 characters"),
  re_password: string()
    .required("Required!")
    .oneOf([ref("new_password"), null], "Password should match!"),
});

const ResetPassword = () => {
  const {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      new_password: "",
      re_password: "",
    },
    validationSchema,
    // onSubmit: (values) => {
      
    //   console.log(values);
    // },
  });

  return (
    <AuthLayout>
      <form  style={{margin:"auto" }} onSubmit={handleSubmit} >
        <Paper  sx={{display:"flex", minWidth:400,flexDirection:"column",gap:"20px"  , justifyContent:"center",
         p:"15px" }}
         >
          <Typography variant='h2' padding={4} textAlign="center">
            Reset Password
          </Typography>
          <TextField
            label="New password"
            variant='outlined'
            type="password"
            value={values.new_password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.new_password && errors.new_password}
          />

          <TextField
            label="Retype password"
            variant='outlined'
            type="password"
            value={values.re_password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.re_password && errors.re_password}
          />

          <Button
            type="submit"
            variant='outlined'
            
          >
            Back to login
          </Button>
        </Paper>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
