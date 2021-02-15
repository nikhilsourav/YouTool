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
  renderDiv: {
    marginTop: '50px',
    padding: '25px',
    textAlign: 'center',
  },
  dataItems: {
    display: 'inline-block',
    wordSpacing: '5px',
  },
}));
