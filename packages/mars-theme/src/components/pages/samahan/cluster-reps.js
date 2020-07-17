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
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  const clusterRepresentatives = [
    {
      name: 'Rholien Rhoi Verallo',
      position: 'ACCOUNTANCY REPRESENTATIVE',
      email: 'rrgverallo@addu.edu.ph',
      img: 'https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/4.png?resize=150%2C150'
    },
    {
      name: 'Hanna Marie B. Yarso',
      position: 'BUSINESS AND MANAGEMENT REPRESENTATIVE',
      email: 'hmbyarso@addu.edu.ph',
      img: 'https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/5.png?resize=150%2C150'
    },
    {
      name: 'She-Chem Edward D. Gaspillo',
      position: 'HUMANITIES AND LETTERS REPRESENTATIVE',
      email: 'scedgaspillo@addu.edu.ph',
      img: 'https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/8.png?resize=150%2C150'
    },
    {
      name: 'Gemarie Santos',
      position: 'NATURAL SCIENCES AND MATHEMATICS REPRESENTATIVE',
      email: 'grsantos@addu.edu.ph',
      img: 'https://i0.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/6.png?resize=150%2C150'
    },
    {
      name: 'Ailene Renee Tagorda',
      position: 'SCHOOL OF EDUCATION REPRESENTATIVE',
      email: 'argtagorda@addu.edu.ph',
      img: 'https://i0.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/7.png?resize=150%2C150'
    },
    {
      name: 'Ethan Joshua Daquipil',
      position: 'SCHOOL OF ENGINEERING AND ARCHITECTURE REPRESENTATIVE',
      email: 'ejudaquipil@addu.edu.ph',
      img: 'https://i0.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/9.png?resize=150%2C150'
    },
    {
      name: 'Karlo Alessandro Torreon',
      position: 'SOCIAL SCIENCES REPRESENTATIVE',
      email: 'kadtorreon@addu.edu.ph',
      img: 'https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/10.png?resize=150%2C150'
    },
    {
      name: 'Kyrr Justino Zerrudo',
      position: 'INTERIM NURSING REPRESENTATIVE',
      email: 'kjpzerrudo@addu.edu.ph',
      img: 'https://i0.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/1.png?resize=150%2C150'
    },
    {
      name: 'Jolemarh Kairus Pandatu',
      position: 'INTERIM COMPUTER STUDIES REPRESENTATIVE',
      email: 'jkmpandatu@addu.edu.ph',
      img: 'https://i2.wp.com/samahan.addu.edu.ph/wp-content/uploads/2020/05/8.png?resize=150%2C150'
    }
  ]

  return (
    <>
      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ fontSize: 'calc(20px + 1.5vw)' }}>
        Cluster Representatives
      </Typography>

      <Grid container direction="row" spacing={3} alignItems="center" justify="center">
        { clusterRepresentatives.map((member) => {
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