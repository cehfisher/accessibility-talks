// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
        ) {
          group(field: {frontmatter: {category: SELECT}}) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
