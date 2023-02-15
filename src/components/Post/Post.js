// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import Tags from './Tags';
import './Post.scss';

const Post = ({ post }) => {
  const { html, fields, frontmatter } = post;
  const { tagSlugs } = fields;
  const { tags } = frontmatter;

  return (
    <main className='post'>
      <Link className='post__home-button' to="/">Home</Link>

      <div className='post__content'>
        <Content body={html} {...frontmatter} />
      </div>
      <div className='post__footer'>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>
    </main>
  );
};

export default Post;
