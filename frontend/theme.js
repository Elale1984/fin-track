import { createTheme } from '@mui/material/styles';

// Define breakpoints for responsive typography
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// Define the responsive typography styles
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2rem', // Base size
    '@media (min-width:600px)': {
      fontSize: '2.5rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '3rem', // Increase size on medium screens
    },
  },
  h2: {
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
      fontSize: '2.25rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2.75rem',
    },
  },
  h3: {
    fontSize: '1.5rem', // Base size
    '@media (min-width:600px)': {
      fontSize: '1.875rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '2.25rem', // Increase size on medium screens
    },
  },
  h4: {
    fontSize: '1.25rem', // Base size
    '@media (min-width:600px)': {
      fontSize: '1.5rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.875rem', // Increase size on medium screens
    },
  },
  h5: {
    fontSize: '1.125rem', // Base size
    '@media (min-width:600px)': {
      fontSize: '1.375rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.625rem', // Increase size on medium screens
    },
  },
  h6: {
    fontSize: '1rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '1.25rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.5rem', // Increase size on medium screens
    },
  },
  subtitle1: {
    fontSize: '1rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '1.125rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.25rem', // Increase size on medium screens
    },
  },
  subtitle2: {
    fontSize: '0.875rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '1rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.125rem', // Increase size on medium screens
    },
  },
  body1: {
    fontSize: '1rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '1.125rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.25rem', // Increase size on medium screens
    },
  },
  body2: {
    fontSize: '0.875rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '1rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1.125rem', // Increase size on medium screens
    },
  },
  caption: {
    fontSize: '0.75rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '0.875rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1rem', // Increase size on medium screens
    },
  },
  overline: {
    fontSize: '0.75rem', // Base size
    '@media (min-width:700px)': {
      fontSize: '0.875rem', // Increase size on small screens
    },
    '@media (min-width:900px)': {
      fontSize: '1rem', // Increase size on medium screens
    },
  },
  
  // Add other typography styles here...
};

const theme = createTheme({
  breakpoints,
  typography,
  // Add other theme configurations here...
});

export default theme;