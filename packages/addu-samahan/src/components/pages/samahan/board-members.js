import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  spacer: {
    height: 100
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 0,
  },
  cardMedia: {
    height: 350,
  },
  dividerBoardMembers: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
  },
}));

const Page = ({ state, actions }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  const boardMembers = [
    {
      name: 'Samantha Claire Cayona',
      position: 'SECRETARY-GENERAL',
      email: 'scgcayona@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cGOmx4rlBuHrrUTicUxGJEZRib3-kUXhMJWRgZFXqfyNQm2pbLCzAYmaJxA9NiRk3j7sOOtfolX2q0xJnL0uTB7asFx6k7u5SOAyGA2vZI1zAza6-hEHJcFGxqI2TfaT61fsZvqOfazSREJJQCyLlS=d'
    },
    {
      name: 'Rona Marie De Castro',
      position: 'TREASURER',
      email: 'rmcdecastro@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3fOvhUyA8rMXHT8poZ0meo4xlMZv2niNsTVolJOFCuA3zNsnFu3qoNhx151h-I891DDs9BkFcHY7UyCvnwSRmmghFmzYPUwdGJT0SzjrNnNmxhb2Wb4x0IZ4QuL4CWkBGmEU9MqfghKU3w2k2jI2SkR=d'
    },
    {
      name: 'Elijah James Banuelos',
      position: 'ADMINSTRATIVE UNDERSECRETARY',
      email: 'ejcbanuelos@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cbJKdbtVQfMYOVmz1ZzWzZDm1rTFK0xd8qM2Jnq2mazZ4CYyvPUDpK3nfAFpJ6ZZt7nivPHX1mkFmuYVOM8MVz23xxr7lBbtwu-ytJG7v_FnreO20LKq7R0YzpeVO1Mvt8bb_KUdR-Za-2XOxCIxG0=d'
    },
    {
      name: 'Riza Claire Pardillo',
      position: 'FINANCE SECRETARY',
      email: 'rizcapardillo@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cGOmx4rlBuHrrUTicUxGJEZRib3-kUXhMJWRgZFXqfyNQm2pbLCzAYmaJxA9NiRk3j7sOOtfolX2q0xJnL0uTB7asFx6k7u5SOAyGA2vZI1zAza6-hEHJcFGxqI2TfaT61fsZvqOfazSREJJQCyLlS=d'
    },
    {
      name: 'Marion James Tarnate',
      position: 'FINANCE UNDERSECRETARY',
      email: 'mjttarnate@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3daEFwiF_6Wp3EbQ-V4dGyXSXXiSYQyqQmmvjD90SNA8kuqkLMx6XuOD7XPOVnhuvMk-2AVGFKkYwaD-4c62aUDx2r_PX2rZ-MmDKJbt8l6KzoOKkE3u5XYuVK6oj3ANdPw1J8NQmZiyAghSHRLuSYl=d'
    },
    {
      name: 'Aldriena Thehani Angas',
      position: 'CHIEF-OF-STAFF',
      email: 'attangas@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cgiRX1byCPjeYY55x4Ga6EZPXw9ct1ijHk_YmXupOuEfMxNoac9t4ed4Fcl59qoGPas-_wrIrI5DURr63N7X14GKVvMbU03YuK_Gu2_n4gwjm7JmRXGb1Y8SEWWeJEqZqdyc6mfLOxz_UCRJ84n9f6=d'
    },
    {
      name: 'Mary Angelie M. Ocon',
      position: 'EXECUTIVE SECRETARY',
      email: 'mamocon@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3dTM-HxLda9GYoZpcbfQ6_hdS1CMqBcegTT4Upweg2iVl6aSM_y-QLtyYM3Z8g9VNkDyxB9_sISjaONsmn_DwiYRAnC2I94_hN8UBxquIDHaA2gWcbAmh0KTo6I_fsJuuSOoGjEUP9K2FOXUTnoXK8q=d'
    },
    {
      name: 'Michael John Vorgs Villas',
      position: 'EXECUTIVE UNDERSECRETARY',
      email: 'mjvrvillas@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cADsfkBjuxr1XSosbqyc4UWrq0FfjukvNXOIGWZB66pLtDyNzg6UDcKp_uf4MUc2LWvlyn-6Pgm7Z1JMgQAXjep8Dr_Uwtm8Fgs8ajztKweszeKnNUWocBhYU6fIESxYIIx1nckkm1Bf_spnO5v5yX=d'
    },
    {
      name: 'Euneece Olbes',
      position: 'ADMINISTRATIVE SECRETARY',
      email: 'eafolbes@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3enezoXGcRknak05wxXnq-7XhOCIGxaGLiIijoCZzQJqpXIjBX-WxD0dGhUzGKEyzZw5OhoF_itYxle9QbY74NsqDmnLKrgPLiF2SSPza6wVmw-yH1fUHaUM5TNh6WGTScvvZe_DC9Mh8rgFW45HfXV=d'
    }
  ]

  return (
    <>
      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        <Grid item sm={8}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item sm style={{ width: '100%' }}>
              <div className={classes.dividerBoardMembers} />
            </Grid>
            <Grid item sm>
              <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ fontSize: 'calc(20px + 1.5vw)' }}>
                Central Board Members
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <Card className={classes.cardRoot} elevation={0} variant="outlined">
            <CardActionArea disabled>
              <CardMedia
                className={classes.cardMedia}
                image="https://lh3.googleusercontent.com/pw/ACtC-3d-D7u30N1CrF9wt4uDo0OIYXnpNJyRihH8rNKBPZJGzKkkC-MY4A2sUq2bvz5_w6R3hDqTDwfKskOlM31C05eiSTpz6mEYUZeXB1fah0UA59QrlHqt_p963x49C5PpjN1IzMNfSgbytk02kNtilL99=d"
                title="President"
              />
              <CardContent>
                <Typography style={{ fontSize: '1.7em' }}>
                  Renz Allan S. Lacorte
                </Typography>
                <Typography style={{ fontSize: '1em' }}>
                  PRESIDENT
                </Typography>
                <Typography style={{ fontSize: '1em' }}>
                  raslacorte@addu.edu.ph
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { boardMembers.map((member) => {
          return (
            <Grid item sm={4} key={member.email}>
              <Card className={classes.cardRoot} elevation={0} variant="outlined">
                <CardActionArea disabled>
                  <CardMedia
                    className={classes.cardMedia}
                    image={member.img}
                    title={member.position}
                  />
                  <CardContent>
                    <Typography style={{ fontSize: '1.7em' }}>
                      {member.name}
                    </Typography>
                    <Typography style={{ fontSize: '1em' }}>
                      {member.position}
                    </Typography>
                    <Typography style={{ fontSize: '1em' }}>
                      {member.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default connect(Page);
