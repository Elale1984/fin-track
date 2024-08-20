import { Box, Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BillDetails from "./BillDetails";

const UpcomingBills = () => {
  return (
    <Box
      display="flex"
      sx={{ px: 2, py: 4, flexDirection: "column", justifyContent: "center" }}
    >
      <Box
        display="flex"
        sx={{ width: "90%", border: "1px solid black", my: 2, py: 1, px: 1 }}
      >
        <Typography variant="body1" color="initial">
          Total Amount Due:{""}
        </Typography>
      </Box>
      <BillDetails />
      <Button
        variant="contained"
        color="success"
        href="/Goals"
        startIcon={<AddCircleIcon />}
      >
        <Typography variant="subtitle2" color="white">
          Add{" "}
        </Typography>
      </Button>
    </Box>
  );
};

export default UpcomingBills;
