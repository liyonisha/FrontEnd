
import { Box } from '@mui/material';

const AuthLayout = (props) => {
  return (
   <Box width="100%" height="100vh" display="flex">
     {props.children}
   </Box>
  );
};

export default AuthLayout;
