import React from "react";
import { connect, styled } from "frontity";
import Nav from "./navigation/nav";
import NavBurger from "./navigation/nav-burger";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  secondaryLogo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchAppBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
            <NavBurger onChosen={() => setDrawer(false)} />
          </Drawer>
          <div className={classes.title}>
            <Logo src="https://lh3.googleusercontent.com/pw/ACtC-3cuTZoX1s3CGO9OxxgczO5I-qs-7mX2KBngxPe0fLFUTihU66HuGw3pOdbrSAunWLnoUG3oJs0G7zV5s0zTbzFTbR_l1qiA5J4HILS7t32LXImpTQ_Bx6cc6frkZdiZ8ryPXRW-HEqhmC7k8X4ANr8X=d" />
          </div>
          <Nav />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            edge="end"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SearchIcon />
          </IconButton>
          <div className={classes.secondaryLogo}>
            <Logo src="https://lh3.googleusercontent.com/pw/ACtC-3fnyPoQelukGCyVwHZ4IffrGgQmOvO9GLWM5vNLnCSyI60bwjo-cq2DBfmLfWhP4pDyeTiOJ14dRX5RGoAKap5YIreXwRONECLL99_0FJdMGRvPEOlAsnTzFIBubiZmTwmCXXRKr4NE1LjoXF8apQmu=d" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SearchAppBar);

const Container = styled.div`
  width: 90%;
  max-width: 100%;
  box-sizing: border-box;
  height: 150px;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Logo = styled.img`
  max-height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin: 0;
  margin-right: 0px;
  margin-bottom: 16px;
`;
