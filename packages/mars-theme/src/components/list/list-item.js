import React from "react";
import { connect, styled } from "frontity";
import Link from "../navigation/link";
import FeaturedMedia from "../featured-media";

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    position: 'relative',
    marginTop: 40,
    minWidth: 275,
    minHeight: '50vh',
    borderRadius: 0
  },
  cardActions: {
    position: 'absolute',
    bottom: 10,
    left: 5
  },
}));

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, actions }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  const classes = useStyles();

  const [renderedExcerpt, setrenderedExcerpt] = React.useState('');

  React.useEffect(() => {
    if ('rendered' in item.excerpt) {
      setrenderedExcerpt(item.excerpt.rendered);
    }
  }, [item.excerpt])

  return (
    <Grid item xs>
      <Card className={classes.cardRoot} elevation={0} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          {author && (
            <Typography variant="body2" color="textSecondary" component="p">By <b>{author.name}</b></Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="p">on <b>{date.toDateString()}</b></Typography>
          <Typography variant="body1" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: renderedExcerpt }} />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" color="primary" disableElevation onClick={() => actions.router.set(item.link)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

/*
  <article>
    <Link link={item.link}>
      <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
    </Link>

    <div>
      {author && (
        <StyledLink link={author.link}>
          <AuthorName>
            By <b>{author.name}</b>
          </AuthorName>
        </StyledLink>
      )}
      <PublishDate>
        {" "}
        on <b>{date.toDateString()}</b>
      </PublishDate>
    </div>

    {state.theme.featured.showOnList && (
      <FeaturedMedia id={item.featured_media} />
    )}

    {item.excerpt && (
      <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
    )}
  </article>
*/