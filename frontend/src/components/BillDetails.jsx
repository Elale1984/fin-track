import { Box, Grid, Typography } from "@mui/material";

const BillDetails = () => {
  return (
    <Box>
      <Box display="flex" sx={{}}>
        <Typography variant="body1" color="initial">
          Details
        </Typography>
      </Box>
      <Grid spacing={2} container>
        <Grid item>
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              borderBlock: "1px solid black",
              px: 2,
              py: 1,
              mb: 1,
            }}
          >
            <Typography
              variant="subtitle2"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              Bill Name
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              borderBlock: "1px solid black",
              px: 2,
              py: 1,
              mb: 1,
            }}
          >
            <Typography
              variant="subtitle2"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              Due
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              borderBlock: "1px solid black",
              px: 2,
              py: 1,
              mb: 1,
            }}
          >
            <Typography
              variant="subtitle2"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              Amount
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillDetails;
