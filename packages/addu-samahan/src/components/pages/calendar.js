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
  const classes = useStyles();

  return (
    <Container>
      {/* Insert header here! */}
      <img src="https://samahan-cdn.snry.xyz/1.-June.png" width="100%" />
      <div className={classes.spacer} />
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Container>
  );
};

export default connect(Page);

const Container = styled.div`
  width: '100%';
  margin: 0;
`;

const CalendarContainer = styled.div`
  width: '80%';
  margin: 'auto';
`;
