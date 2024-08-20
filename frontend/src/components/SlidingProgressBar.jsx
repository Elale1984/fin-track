import Box from "@mui/material/Box";
import PropTypes from 'prop-types'; 

const SlidingProgressBar = ({percentageTaken, percentageRemaining}) => {
  return (
    <Box display="flex" sx={{ height: 40 }}>
      <Box
        width={percentageTaken}
        sx={{
          backgroundColor: "lime",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      ></Box>
      <Box
        width={percentageRemaining}
        sx={{
          backgroundColor: "grey",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      ></Box>
    </Box>
  );
};

SlidingProgressBar.propTypes = {
    percentageTaken: PropTypes.string,
    percentageRemaining: PropTypes.string
}

export default SlidingProgressBar;
