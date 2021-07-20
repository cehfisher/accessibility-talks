// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html, fields, frontmatter } = post;
  const { tagSlugs } = fields;
  const { tags } = frontmatter;

  return (
    <main className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">Home</Link>

      <div className={styles['post__content']}>
        <Content body={html} {...frontmatter} />
      </div>

      <hr />

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>
    </main>
  );
};

export default Post;
