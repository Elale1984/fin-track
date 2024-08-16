import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx"; // Your sidebar component
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme.js";
import Budgets from "./pages/Budgets.jsx";
import Goals from "./pages/Goals.jsx";
import Box from "@mui/material/Box"; // Import Box from MUI for layout
import Login from './pages/Login.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
