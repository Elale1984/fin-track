import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme.js";
import Budgets from "./pages/Budgets.jsx";
import Goals from "./pages/Goals.jsx";
import Box from "@mui/material/Box";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

const MainLayout = () => {
  const location = useLocation();

  // Determine whether to show the NavBar
  const showNavBar = location.pathname !== '/login';

  return (
    <Box sx={{ display: "flex"}}>
      {showNavBar && <NavBar />}
      <Box component="main" sx={{ width: '90vw' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/budgets"
            element={
              <ProtectedRoute>
                <Budgets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/goals"
            element={
              <ProtectedRoute>
                <Goals />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
