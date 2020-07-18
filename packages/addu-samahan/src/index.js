import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

import { helpPortalHandler, samahanHandler, calendarHandler } from './router';
import { studentServicesHandler, iHelpHandler, constiHandler } from './router';
import { newsFeedHandler, clubsHandler, officersHandler } from './router';
import { docsHandler } from './router';

const samahanTheme = {
  name: "addu-samahan",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers = [
          helpPortalHandler,
          samahanHandler,
          calendarHandler,
          studentServicesHandler,
          iHelpHandler,
          constiHandler,
          newsFeedHandler,
          clubsHandler,
          officersHandler,
          docsHandler,
          ...libraries.source.handlers
        ];
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default samahanTheme;
