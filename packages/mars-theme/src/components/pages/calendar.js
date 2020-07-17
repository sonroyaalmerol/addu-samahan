import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
}));

const Page = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  return (
    <Container>
      {/* Insert header here! */}
      <img src="http://samahan.addu.edu.ph/wp-content/uploads/2020/06/1.-June.png" width="100%" />
      <div className={classes.spacer} />
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Container>
  );
};

export default connect(Page);

const Container = styled.section`
  width: '100%';
  margin: 0;
`;

const CalendarContainer = styled.div`
  width: '80%';
  margin: 'auto';
`;
