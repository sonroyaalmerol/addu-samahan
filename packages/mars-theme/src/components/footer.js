import React from "react";
import { connect, styled } from "frontity";

import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 20,
    marginTop: 80,
    width: '100%'
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  }
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        Copyright {(new Date()).getFullYear()} SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development
      </Typography>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SearchAppBar);
