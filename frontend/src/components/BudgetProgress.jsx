import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'; 

const AnimatedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

const BudgetProgress = ({ usedAmount, totalAmount }) => {
  const percentage = (usedAmount / totalAmount) * 100;

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <AnimatedLinearProgress variant="determinate" value={percentage} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(percentage)}%`}</Typography>
      </Box>
    </Box>
  );
};

BudgetProgress.propTypes = {
    usedAmount: PropTypes.number,
    totalAmount: PropTypes.number
}

export default BudgetProgress;
