import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  Footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
  },
  Modal: {
    '&:active': {
      outline: 'none',
    },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max(50vw,300px)',
    padding: '30px',
  },
  IconContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  Menu: {
    transform: 'translate(-15px, 40px)',
    [theme.breakpoints.down('960')]: {
      transform: 'translate(75px, -40px)',
    },
  },
  socialsLink: {
    WebkitTapHighlightColor: 'transparent',
    textDecoration: 'none',
    color: '#000',
  },
}));
