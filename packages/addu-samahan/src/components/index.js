import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import List from "./list";
import Post from "./post";
import Loading from "./navigation/loading";
import Title from "./title";
import PageError from "./navigation/page-error";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Clubs from './pages/cco/clubs';
import Officers from './pages/cco/officers';
import ConsiNatinTo from './pages/projects/constinatinto';
import IHelp from './pages/projects/ihelp';
import StudentServicesManual from './pages/projects/student-services-manual';
import Calendar from './pages/calendar';
import HelpPortal from './pages/help-portal';
import NewsFeed from './pages/newsfeed';
import Samahan from './pages/samahan';
import SamahanDocs from './pages/samahan-docs';

import Favicon from '../assets/favicon.png';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href={Favicon}></link>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HelpPortal when={data.isHelpPortal} />
          <Samahan when={data.isSamahan} />
          <Calendar when={data.isCalendar} />
          <StudentServicesManual when={data.isStudentServices} />
          <IHelp when={data.isiHelp} />
          <ConsiNatinTo when={data.isConsti} />
          <NewsFeed when={data.isNewsFeed} />
          <Clubs when={data.isClubs} />
          <Officers when={data.isOfficers} />
          <SamahanDocs when={data.isDocs} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
      
    </ThemeProvider>
  );
};

export default connect(Theme);

const Main = styled.div`
  display: flex;
  height: 100%;
  background-image: '#fff';
`;
