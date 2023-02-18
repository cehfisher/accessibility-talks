// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
        ) {
          group(field: {frontmatter: {tags: SELECT}}) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
