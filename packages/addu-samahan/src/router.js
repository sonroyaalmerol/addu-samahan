export const helpPortalHandler = {
  priority: 10,
  pattern: "/samahan-help-portal/",
  func: ({ state }) => {
    console.log("hello!");
    state.source.data["/samahan-help-portal/"].isHelpPortal = true;
  }
}

export const samahanHandler = {
  priority: 10,
  pattern: "/samahan/",
  func: ({ state }) => {
    state.source.data["/samahan/"].isSamahan = true;
  }
}

export const calendarHandler = {
  priority: 10,
  pattern: "/calendar/",
  func: ({ state }) => {
    state.source.data["/calendar/"].isCalendar = true;
  }
}

export const studentServicesHandler = {
  priority: 10,
  pattern: "/projects/student-services-manual/",
  func: ({ state }) => {
    state.source.data["/projects/student-services-manual/"].isStudentServices = true;
  }
}

export const iHelpHandler = {
  priority: 10,
  pattern: "/projects/ihelp/",
  func: ({ state }) => {
    state.source.data["/projects/ihelp/"].isiHelp = true;
  }
}

export const constiHandler = {
  priority: 10,
  pattern: "/projects/constinatinto/",
  func: ({ state }) => {
    state.source.data["/projects/constinatinto/"].isConsti = true;
  }
}

export const newsFeedHandler = {
  priority: 10,
  pattern: "/newsfeed/",
  func: ({ state }) => {
    state.source.data["/newsfeed/"].isNewsFeed = true;
  }
}

export const clubsHandler = {
  priority: 10,
  pattern: "/cco/clubs/",
  func: ({ state }) => {
    state.source.data["/cco/clubs/"].isClubs = true;
  }
}

export const officersHandler = {
  priority: 10,
  pattern: "/cco/officers/",
  func: ({ state }) => {
    state.source.data["/cco/officers/"].isOfficers = true;
  }
}

export const docsHandler = {
  priority: 10,
  pattern: "/samahan-docs/",
  func: ({ state }) => {
    state.source.data["/samahan-docs/"].isDocs = true;
  }
}