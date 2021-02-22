import axios from 'axios';
import { useState } from 'react';
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
  const classes = useStyles();

  const url = 'http://localhost:8080/api';

  const [playlistLink, setPlaylistLink] = useState('');
  const [apiData, setApiData] = useState(null);
  const [btnClick, setBtnClick] = useState(false);

  const handleClick = async () => {
    setBtnClick(true);
    const { data } = await axios.get(`${url}/${playlistLink}`);
    setApiData(data.totalDuration);
  };

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
            <Typography variant='h6'>Details</Typography>
            {apiData &&
              apiData.map((item, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <Typography> {`${item} hour`} </Typography>
                  ) : index === 1 ? (
                    <Typography> {`${item} minutes`} </Typography>
                  ) : index === 2 ? (
                    <Typography> {`${item} seconds`} </Typography>
                  ) : index === 3 ? (
                    <Typography> {`Total videos: ${item}`} </Typography>
                  ) : (
                    ''
                  )}
                </div>
              ))}
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
