import axios from 'axios';
import { useState } from 'react';
import { TextField, Paper, Typography, Button, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Body = () => {
  const classes = useStyles();

  const url = 'http://localhost:8080/api';

  const [playlistLink, setPlaylistLink] = useState('');
  const [receivedData, setReceivedData] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);

    // returns promise
    const getDurationData = async () => {
      try {
        const response = await axios.get(`${url}/${playlistLink}`);
        const data = await response.data;
        setReceivedData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDurationData();
  };

  return (
    <>
      <Paper elevation={4}>
        <form className={`${classes.root} ${classes.Form}`} onSubmit={handleSubmit}>
          <Typography className={classes.Heading}>Paste your link</Typography>
          <TextField
            variant='outlined'
            label='Your link here'
            fullWidth
            placeholder='http://youtube.com/playlist'
            value={playlistLink}
            onChange={(e) => setPlaylistLink(e.target.value)}
          />
          <Button
            className={classes.ButtonSubmit}
            color='secondary'
            variant='contained'
            type='submit'
          >
            Analyze
          </Button>
        </form>
      </Paper>
      {flag ? (
        <Paper className={classes.renderDiv} elevation={4}>
          <Typography>
            {receivedData.totalDuration ? receivedData.totalDuration : <CircularProgress />}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
    </>
  );
};

export default Body;
