// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import MemberBio from '../components/MemberBio';
import { useSiteMetadata } from '../hooks';

const MemberTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { name: pageTitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} subtitle={pageTitle} description={metaDescription} socialImage={socialImage} type="memberBio" >
      <Sidebar />
      <MemberBio {...frontmatter} />
    </Layout>
  );
};

export const query = graphql`
  query MemberBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        name
        title
        bio
        social {
          name
          uri
        }
        pronouns
        callout
        socialImage
        template
      }
    }
  }
`;

export default MemberTemplate;
