import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';

import Banner from './home/banner';
import Help from './home/help';
import NewsFeed from './home/newsfeed';
import Projects from './home/projects';
import SocialMedia from './home/social-media';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
}));

const List = ({ state, actions }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Container>
      {/* Insert header here! */}
      <Banner />
      <div className={classes.contentContainer}>
        <div className={classes.spacer}></div>
        
        <Projects />

        <div className={classes.spacer}></div>

        <Help />

        <div className={classes.spacer}></div>

        <NewsFeed />

        <div className={classes.spacer}></div>
        
        <SocialMedia />
      </div>
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: '100%';
  margin: 0;
  list-style: none;
`;
