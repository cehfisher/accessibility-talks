// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MemberList from '../components/MemberList';
import MemberPastList from '../components/MemberPastList';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle, subtitle: pageSubtitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  const currentMembers = data.current;
  const pastMembers = data.past;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} subtitle={pageSubtitle} description={metaDescription} socialImage={socialImage} >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />

        { pageTitle === 'About' && (
          <div className="members-section">
            {(currentMembers.nodes.length > 0) && (
              <MemberList {...currentMembers} />
            )}

            { (pastMembers.nodes.length > 0) && (
              <MemberPastList {...pastMembers} />
            )}
          </div>
        )}
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
        date
        description
        socialImage
      }
    }
    current: allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: {
        frontmatter: {
          template: {eq: "member"},
          draft: {ne: true},
          current: {eq: true}
        }
      }
    ) {
      nodes {
        frontmatter {
          name
          socialImage
        }
        fields {
          slug
        }
      }
    }
    past: allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: {
        frontmatter: {
          template: {eq: "member"},
          current: {eq: false},
          draft: {ne: true},
        }
      }
    ) {
      nodes {
        frontmatter {
          name
          social {
            name
            uri
          }
        }
      }
    }
  }
`;

export default PageTemplate;
