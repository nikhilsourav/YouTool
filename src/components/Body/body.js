import axios from 'axios';
import { useState } from 'react';
import { TextField, Paper, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const Body = () => {
  const classes = useStyles();

  const url = 'http://localhost:8080/api';

  const [playlistLink, setPlaylistLink] = useState('');
  const [apiData, setApiData] = useState(null);

  const handleClick = async () => {
    const { data } = await axios.get(`${url}/${playlistLink}`);
    // console.log(data)
    setApiData(data.totalDuration);
  };

  return (
    <>
      <Paper elevation={4} className={`${classes.Container} ${classes.root}`}>
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
      {!apiData ? (
        ''
      ) : (
        <Paper className={classes.renderDiv} elevation={4}>
          <Typography variant='h6'>Details</Typography>
          {apiData &&
            apiData.map((item, index) => (
              <Typography key={index} className={classes.dataItems}>
                {index === 1
                  ? `: ${item} minutes : `
                  : index === 2
                  ? ` : ${item} seconds : `
                  : index === 3
                  ? ` : Total Videos :: ${item}`
                  : `${item} hours :`}
              </Typography>
            ))}
        </Paper>
      )}
    </>
  );
};

export default Body;
