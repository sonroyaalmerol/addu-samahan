const settings = {
  "name": "samahan",
  "state": {
    "frontity": {
      "url": "http://samahan.addu.edu.ph",
      "title": "SAMAHAN",
      "description": "Samahan ng mga mag-aaral ng pamantasan ng Ateneo de Davao"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            {
              name: "Home",
              href: "/"
            },
            {
              name: "Help Portal",
              href: "/samahan-help-portal/"
            },
            {
              name: "SAMAHAN",
              href: "/samahan/"
            },
            {
              name: "Calendar",
              href: "/calendar/"
            },
            {
              name: "Projects",
              href: "/projects/",
              submenu: [
                {
                  name: 'Student Services',
                  href: '/projects/student-services-manual/'
                },
                {
                  name: 'iHELP',
                  href: '/projects/ihelp/'
                },
                {
                  name: '#ConstiNatinTo',
                  href: '/projects/constinatinto/'
                }
              ]
            },
            {
              name: "Newsfeed",
              href: "/newsfeed/"
            },
            {
              name: "CCO",
              href: "/cco/",
              submenu: [
                {
                  name: 'Clubs',
                  href: '/cco/clubs'
                },
                {
                  name: 'Officers',
                  href: '/cco/officers'
                }
              ]
            },
            {
              name: "Docs",
              href: "/samahan-docs/"
            },
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://samahan.addu.edu.ph/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
