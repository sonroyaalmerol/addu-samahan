import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  cardRoot: {
    position: 'relative',
    marginTop: 40,
    minWidth: 275,
    minHeight: '70vh',
    borderRadius: 0
  },
  cardMedia: {
    height: 350,
  },
  cardActions: {
    position: 'absolute',
    bottom: 10,
    left: 5
  }
}));

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.contentHeader}>
        Projects and Initiatives
      </Typography>

      <Grid container direction="row" spacing={3}>
        <Grid item xs>
          <Card className={classes.cardRoot} elevation={0}>
            <CardMedia
              className={classes.cardMedia}
              image="https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/board-ihelp2-1.png?resize=768%2C528"
              title="iHELP"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                iHELP SAMAHAN
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              iHelp SAMAHAN will be the umbrella program for all SAMAHAN- initiated efforts at addressing and aiding calamities. 
              At the core, while we can never be fully prepared for calamities, this will create an opportunity for us to respond more efficiently.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button variant="contained" color="primary" disableElevation onClick={() => actions.router.set('/projects/ihelp/')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.cardRoot} elevation={0}>
            <CardMedia
              className={classes.cardMedia}
              image="https://i0.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/board-student-services.png?resize=768%2C528"
              title="Student Service Manual"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Student Service Manual
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Together with the content from the SAMAHAN Guide Book, 
              student services manual includes the necessary information for the student body 
              regarding the different services offered by the various university offices.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button variant="contained" color="primary" disableElevation onClick={() => actions.router.set('/projects/student-services-manual/')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.cardRoot} elevation={0}>
            <CardMedia
              className={classes.cardMedia}
              image="https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/board-consti.png?resize=768%2C528"
              title="ConstiNatinTo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ConstiNatinTo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              The 1982 SAMAHAN Constitution is extremely outdated. Aside from terminologies and structures, 
              some parts of the 1982 SAMAHAN Constitution are also vague, which may cause contentions on its true interpretations. 
              This revision seeks to make this constitution as clear and specific as possible.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button variant="contained" color="primary" disableElevation onClick={() => actions.router.set('/projects/constinatinto/')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default connect(List);
