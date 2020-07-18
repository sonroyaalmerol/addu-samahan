import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "../list-item";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  headerWithDivider: {
    display: 'flex',
    alignItems: 'center'
  },
  dividerNewsFeed: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
    marginRight: 20
  }
}));

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerWithDivider}>
        <div className={classes.dividerNewsFeed}></div>
        <Typography variant="h3" className={classes.contentHeader}>
          Newsfeed
        </Typography>
      </div>

      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      <Grid container direction="row" spacing={3} alignItems="stretch">
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
      </Grid>
    </>
  );
};

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
