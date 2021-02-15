import useStyles from './styles';
import { Typography, Paper } from '@material-ui/core';

const Navbar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.Navbar}>
      <Typography variant='h6' align='center'>
        Navbar
      </Typography>
    </Paper>
  );
};

export default Navbar;
