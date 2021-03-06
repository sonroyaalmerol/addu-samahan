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
    margin: 'auto'
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
            <SamahanLogo src="https://samahan-cdn.snry.xyz/Samahan-Top-Bar-Logo.png" />
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
            <MotionLogo src="https://samahan-cdn.snry.xyz/More-in-Motion.png" />
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

const SamahanLogo = styled.img`
  width: calc(180px + 1.5vw);
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MotionLogo = styled.img`
  width: calc(80px + 1vw);
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin: 0;
  margin-right: 0px;
  margin-bottom: 16px;
`;
