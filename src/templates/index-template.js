import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import { isBefore } from 'date-fns';

const IndexTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;

  // Gather future posts.
  const future = edges.filter((a) => {
    const d = new Date(a.node.frontmatter.date);
    return isBefore(new Date(), d);
  }).
  // Reverse sort them.
  sort((a, b) => {
    const ad = new Date(a.node.frontmatter.date);
    const bd = new Date(b.node.frontmatter.date);
    if (isBefore(ad, bd)) return -1;
    else return 1;
  });
  // Pop out the next one. (first in list).
  const next = future.shift();

  // Remove future posts for the rest.
  const past = edges.filter((a) => {
    const d = new Date(a.node.frontmatter.date);
    return isBefore(d, new Date());
  });

  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={past} next={next} future={future} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: {
          frontmatter: {
            template: { eq: "post" },
            draft: { ne: true }
          }
        },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
    edges {
      node {
        id
        fields {
          slug
          categorySlug
        }
        frontmatter {
          socialImage
          title
          subtitle
          date
          description
          next
        }
        html
      }
    }
  }
}
`;

export default IndexTemplate;
