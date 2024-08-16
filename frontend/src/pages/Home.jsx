import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      display="flex"
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Box>
        <Typography variant="h2" color="primary">
          FinTrack
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
