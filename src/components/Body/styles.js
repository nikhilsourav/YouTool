import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(0.7),
      marginRight: theme.spacing(0.7),
    },
  },
  Container: {
    height: 'max(72.5vh, 550px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Form: {
    padding: '25px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '15px 0',
  },
  ButtonSubmit: {
    marginBottom: 10,
  },
  progress: {
    marginTop: '60px',
  },
  detailsDiv: {
    marginTop: '50px',
    padding: '25px',
  },
}));
