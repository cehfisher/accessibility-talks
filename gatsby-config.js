'use strict';

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/static/css`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                subtitle
                description: subtitle
              }
            }
          }
        `,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => (
            allMarkdownRemark.edges.map((edge) => ({
              ...edge.node.frontmatter,
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.site_url + edge.node.fields.slug,
              guid: site.siteMetadata.site_url + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }]
            }))
          ),
          query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: {frontmatter: {date: DESC}}
                  filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        subtitle
                        date
                        template
                        draft
                        description
                        socialImage
                      }
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: siteConfig.title
        }]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteConfig.url,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page, }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'src/logo.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      sassOptions: {
        includePaths: ['src/assets'],
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-optimize-svgs',
  ]
};
