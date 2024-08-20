import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token
    localStorage.removeItem("authToken");

    // Redirect to login screen
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        backgroundColor: "white",
        width: "10vw",
        height: "100vh",
        borderRight: "0.1rem solid lightGray",
        boxShadow: "1px 1px 7px black",
        px: 1,

      }}
    >
      <Button
        variant="text"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ mb: 2, mt: 5 }}
      >
        Home
      </Button>

      <Button
        variant="text"
        color="primary"
        onClick={() => navigate("/budgets")}
        sx={{ mb: 2 }}
      >
        Budgets
      </Button>

      <Button
        variant="text"
        color="primary"
        onClick={() => navigate("/goals")}
        sx={{ mb: 2 }}
      >
        Goals
      </Button>
      <Divider sx={{ my: 5 }} />
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default NavBar;
