// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dancing Goat',
  plugins: [
    {
      use: '@meeg/gridsome-source-kentico-kontent',
      options:
      {
        deliveryClientConfig: {
          projectId: process.env.KENTICO_KONTENT_PROJECT_ID
        }
      }
    }
  ],
  templates: {
    AboutUs: [
      {
        path: '/about-us/:codename'
      }
    ],
    Article: [
      {
        path: '/articles/:codename'
      }
    ],
    Brewer: [
      {
        path: '/brewers/:codename'
      }
    ],
    Coffee: [
      {
        path: '/coffees/:codename'
      }
    ],
    FactAboutUs: [
      {
        path: '/fact-about-us/:codename'
      }
    ],
  }
}
