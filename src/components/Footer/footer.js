import { useState } from 'react';
import useStyles from './styles';
import {
  Paper,
  Button,
  Modal,
  Typography,
  IconButton,
  Avatar,
  Container,
  Menu,
  MenuItem,
  Fade,
  Tooltip,
} from '@material-ui/core';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';
// images
import Nikhil from '../../Images/Nikhil.jpg';
import Jitu from '../../Images/Jitu.jpeg';
import Tushar from '../../Images/Tushar.jpeg';

const Footer = () => {
  // mui
  const classes = useStyles();

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // menu 1
  const [anchorEl1, setAnchorEl1] = useState(null);
  const openMenu1 = Boolean(anchorEl1);
  const handleMenuClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleMenuClose1 = () => {
    setAnchorEl1(null);
  };
  // menu 2
  const [anchorEl2, setAnchorEl2] = useState(null);
  const openMenu2 = Boolean(anchorEl2);
  const handleMenuClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };
  // menu 3
  const [anchorEl3, setAnchorEl3] = useState(null);
  const openMenu3 = Boolean(anchorEl3);
  const handleMenuClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleMenuClose3 = () => {
    setAnchorEl3(null);
  };

  const modalBody = (
    <Paper className={classes.Modal}>
      <Typography align='center' variant='h6'>
        Developers
      </Typography>
      <Container className={classes.IconContainer}>
        <div>
          <Tooltip title='Tushar Khandelwal ( Full stack developer )'>
            <IconButton onClick={handleMenuClick1}>
              <Avatar src={Tushar} />
            </IconButton>
          </Tooltip>
          <Menu
            id='fade-menu'
            anchorEl={anchorEl1}
            keepMounted
            open={openMenu1}
            onClose={handleMenuClose1}
            TransitionComponent={Fade}
            className={classes.Menu}
          >
            <a
              href='https://www.linkedin.com/in/khandelwal-tushar'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose1}>LinkedIn</MenuItem>
            </a>
            <a
              href='https://github.com/khandelwal-tushar'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose1}>GitHub</MenuItem>
            </a>
          </Menu>
        </div>
        <div>
          <Tooltip title='Jitendra Raj ( Full stack developer )'>
            <IconButton onClick={handleMenuClick2}>
              <Avatar src={Jitu} />
            </IconButton>
          </Tooltip>
          <Menu
            id='fade-menu'
            anchorEl={anchorEl2}
            keepMounted
            open={openMenu2}
            onClose={handleMenuClose2}
            TransitionComponent={Fade}
            className={classes.Menu}
          >
            <a
              href='https://www.linkedin.com/in/jitendra-raj-290ab5185/'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose2}>LinkedIn</MenuItem>
            </a>
            <a
              href='https://github.com/jitendra29-cyber'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose2}>GitHub</MenuItem>
            </a>
          </Menu>
        </div>
        <div>
          <Tooltip title='Nikhil Sourav ( Full stack developer )'>
            <IconButton onClick={handleMenuClick3}>
              <Avatar src={Nikhil} />
            </IconButton>
          </Tooltip>
          <Menu
            id='fade-menu'
            anchorEl={anchorEl3}
            keepMounted
            open={openMenu3}
            onClose={handleMenuClose3}
            TransitionComponent={Fade}
            className={classes.Menu}
          >
            <a
              href='https://www.linkedin.com/in/nikhil-sourav-796024183/'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose3}>LinkedIn</MenuItem>
            </a>
            <a
              href='https://github.com/nikhilsourav'
              target='_blank'
              className={classes.socialsLink}
            >
              <MenuItem onClick={handleMenuClose3}>GitHub</MenuItem>
            </a>
          </Menu>
        </div>
      </Container>
    </Paper>
  );

  return (
    <Paper className={classes.Footer}>
      <IconButton onClick={handleOpen}>
        <DeveloperModeRoundedIcon color='inherit' />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </Paper>
  );
};

export default Footer;
