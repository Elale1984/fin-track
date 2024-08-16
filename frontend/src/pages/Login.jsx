import { Box, Paper, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Box display="flex" sx={{height: '100vh', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
      <Box display="flex" sx={{pb: 5}}>
        <Typography variant="h2" color="primary">
          Welcome Back
        </Typography>
      </Box>
      <Paper elevation={9} display="flex" sx={{}}>
        <Box display="flex" sx={{}}>
            <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
