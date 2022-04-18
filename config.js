'use strict';

module.exports = {
  url: 'https://a11ytalks.com',
  pathPrefix: '/',
  title: 'A11yTalks',
  subtitle: 'Virtual meet-up featuring speakers & conversations around digital accessibility',
  copyright: '© 2021 All rights reserved.',
  disqusShortname: '',
  postsPerPage: 5,
  useKatex: false,
  menu: [
    {
      label: 'About',
      path: '/pages/about'
    },
    {
      label: 'Accessibility',
      path: '/pages/accessibility'
    },
    {
      label: 'All Tags',
      path: '/tags'
    },
    {
      label: 'Calendar',
      path: '/pages/calendar'
    },
    {
      label: 'Code of Conduct',
      path: '/pages/conduct'
    },
    {
      label: 'Store',
      path: 'https://www.redbubble.com/people/a11ytalks/works/39136088-accessibility-a11y-cats',
      external: true
    }
  ],
  author: {
    name: 'A11yTalks',
    photo: '/photo.png',
    bio: 'Virtual meet-up featuring speakers & conversations around digital accessibility',
    contacts: {
      email: 'accessibilitytalks@gmail.com',
      youtube: 'accessibilitytalks',
      twitter: 'A11yTalks',
      github: 'cehfisher/accessibility-talks',
      rss: '',
      linkedin: '',
      oc: 'https://opencollective.com/a11ytalks',
    }
  }
};
