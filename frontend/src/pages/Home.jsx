import { Container, Grid, Paper, } from "@mui/material";
import UpcomingBills from "../components/UpcomingBills";

const Home = () => {
  return (
    <Container maxWidth={false} sx={{ height: "100vh", p: 2 }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ height: "100%" }}><UpcomingBills /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ height: "100%" }}>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ height: "100%" }}>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ height: "100%" }}>4</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
