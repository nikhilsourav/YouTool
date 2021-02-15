import useStyles from './styles';
import { Typography, Paper } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.Footer}>
      <Typography variant='h6' align='center'>
        Footer
      </Typography>
    </Paper>
  );
};

export default Footer;
