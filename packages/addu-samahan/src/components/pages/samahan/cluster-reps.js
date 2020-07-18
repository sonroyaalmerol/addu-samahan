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
  
  const classes = useStyles();

  const clusterRepresentatives = [
    {
      name: 'Rholien Rhoi Verallo',
      position: 'ACCOUNTANCY REPRESENTATIVE',
      email: 'rrgverallo@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cADsfkBjuxr1XSosbqyc4UWrq0FfjukvNXOIGWZB66pLtDyNzg6UDcKp_uf4MUc2LWvlyn-6Pgm7Z1JMgQAXjep8Dr_Uwtm8Fgs8ajztKweszeKnNUWocBhYU6fIESxYIIx1nckkm1Bf_spnO5v5yX=d'
    },
    {
      name: 'Hanna Marie B. Yarso',
      position: 'BUSINESS AND MANAGEMENT REPRESENTATIVE',
      email: 'hmbyarso@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cgiRX1byCPjeYY55x4Ga6EZPXw9ct1ijHk_YmXupOuEfMxNoac9t4ed4Fcl59qoGPas-_wrIrI5DURr63N7X14GKVvMbU03YuK_Gu2_n4gwjm7JmRXGb1Y8SEWWeJEqZqdyc6mfLOxz_UCRJ84n9f6=d'
    },
    {
      name: 'She-Chem Edward D. Gaspillo',
      position: 'HUMANITIES AND LETTERS REPRESENTATIVE',
      email: 'scedgaspillo@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cbJKdbtVQfMYOVmz1ZzWzZDm1rTFK0xd8qM2Jnq2mazZ4CYyvPUDpK3nfAFpJ6ZZt7nivPHX1mkFmuYVOM8MVz23xxr7lBbtwu-ytJG7v_FnreO20LKq7R0YzpeVO1Mvt8bb_KUdR-Za-2XOxCIxG0=d'
    },
    {
      name: 'Gemarie Santos',
      position: 'NATURAL SCIENCES AND MATHEMATICS REPRESENTATIVE',
      email: 'grsantos@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3dTM-HxLda9GYoZpcbfQ6_hdS1CMqBcegTT4Upweg2iVl6aSM_y-QLtyYM3Z8g9VNkDyxB9_sISjaONsmn_DwiYRAnC2I94_hN8UBxquIDHaA2gWcbAmh0KTo6I_fsJuuSOoGjEUP9K2FOXUTnoXK8q=d'
    },
    {
      name: 'Ailene Renee Tagorda',
      position: 'SCHOOL OF EDUCATION REPRESENTATIVE',
      email: 'argtagorda@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3enezoXGcRknak05wxXnq-7XhOCIGxaGLiIijoCZzQJqpXIjBX-WxD0dGhUzGKEyzZw5OhoF_itYxle9QbY74NsqDmnLKrgPLiF2SSPza6wVmw-yH1fUHaUM5TNh6WGTScvvZe_DC9Mh8rgFW45HfXV=d'
    },
    {
      name: 'Ethan Joshua Daquipil',
      position: 'SCHOOL OF ENGINEERING AND ARCHITECTURE REPRESENTATIVE',
      email: 'ejudaquipil@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3daEFwiF_6Wp3EbQ-V4dGyXSXXiSYQyqQmmvjD90SNA8kuqkLMx6XuOD7XPOVnhuvMk-2AVGFKkYwaD-4c62aUDx2r_PX2rZ-MmDKJbt8l6KzoOKkE3u5XYuVK6oj3ANdPw1J8NQmZiyAghSHRLuSYl=d'
    },
    {
      name: 'Karlo Alessandro Torreon',
      position: 'SOCIAL SCIENCES REPRESENTATIVE',
      email: 'kadtorreon@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cQhTjJqEkjOTQqQ7--FaRSe8x0fIYibQsxSzPmLTbBNg7vGD85SwNxCKN0zSnopqUhGwRZnzIwUEnHgNf-oyvGUJJz6pA4X0FIHcs1goL7G8j-mJ5u0hbCoke3qNkooOE-41YV5-OwNBpqH-uGH9Rn=d'
    },
    {
      name: 'Kyrr Justino Zerrudo',
      position: 'INTERIM NURSING REPRESENTATIVE',
      email: 'kjpzerrudo@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3d-D7u30N1CrF9wt4uDo0OIYXnpNJyRihH8rNKBPZJGzKkkC-MY4A2sUq2bvz5_w6R3hDqTDwfKskOlM31C05eiSTpz6mEYUZeXB1fah0UA59QrlHqt_p963x49C5PpjN1IzMNfSgbytk02kNtilL99=d'
    },
    {
      name: 'Jolemarh Kairus Pandatu',
      position: 'INTERIM COMPUTER STUDIES REPRESENTATIVE',
      email: 'jkmpandatu@addu.edu.ph',
      img: 'https://lh3.googleusercontent.com/pw/ACtC-3cbJKdbtVQfMYOVmz1ZzWzZDm1rTFK0xd8qM2Jnq2mazZ4CYyvPUDpK3nfAFpJ6ZZt7nivPHX1mkFmuYVOM8MVz23xxr7lBbtwu-ytJG7v_FnreO20LKq7R0YzpeVO1Mvt8bb_KUdR-Za-2XOxCIxG0=d'
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