import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  TextField,
  Paper,
  Typography,
  Button,
  Container,
  CircularProgress,
} from '@material-ui/core';
import useStyles from './styles';

const Body = () => {
  // mui
  const classes = useStyles();

  // baseUrl
  const url = 'http://localhost:8080/api';

  // states
  const [playlistLink, setPlaylistLink] = useState('');
  const [apiData, setApiData] = useState(null);
  const [btnClick, setBtnClick] = useState(false);

  // btnClick
  const handleClick = async () => {
    setBtnClick(true);
    const { data } = await axios.get(`${url}/${playlistLink}`);
    setApiData(data);
  };

  // Window's dimensions
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  };
  const { width } = useWindowDimensions();

  return (
    <Container className={classes.Container}>
      <Paper elevation={4} className={`${classes.Form} ${classes.root}`}>
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
          onClick={handleClick}
        >
          Analyze
        </Button>
      </Paper>
      {btnClick ? (
        apiData ? (
          <Paper className={classes.detailsDiv} elevation={4}>
            <Typography variant='h6' align='center'>
              Details
            </Typography>
            Duraion :{' '}
            {apiData &&
              apiData.totalDuration.map((item, index) => (
                <div className={classes.durationItems} key={index}>
                  {width > 500
                    ? index == 0
                      ? `${item} hours`
                      : index == 1
                      ? `${item} minutes`
                      : index == 2
                      ? `${item} seconds`
                      : ''
                    : index == 0
                    ? `${item} h`
                    : index == 1
                    ? `${item} m`
                    : index == 2
                    ? `${item} s`
                    : ''}
                </div>
              ))}
            {apiData && <Typography>Total videos: {apiData.totalVideos}</Typography>}
          </Paper>
        ) : (
          <CircularProgress className={classes.progress} />
        )
      ) : (
        ''
      )}
    </Container>
  );
};

export default Body;
