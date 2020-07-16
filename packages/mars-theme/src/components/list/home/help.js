import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
}));

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6} alignItems="center">
      <Grid item md>
        <Typography variant="h4" component="h2" style={{ lineHeight: '1.5em', fontSize: '2vw' }}>
          Need some help? Go to
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: '5vw' }}>
          SAMAHAN
        </Typography>
        <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em', fontSize: '5vw' }}>
          HELP PORTAL
        </Typography><br />
        <Button variant="contained" color="primary" disableElevation onClick={() => actions.router.set('/samahan-help-portal/')}>
          Learn More
        </Button>
      </Grid>
      <Grid item md>
        <center>
          <img src="https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/EX9n9N3UYAAOt62.jpg?resize=768%2C768" style={{ width: '100%' }} />
        </center>
      </Grid>
    </Grid>
  );
};

export default connect(List);
