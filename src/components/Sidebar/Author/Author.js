// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import './Author.scss';

const Author = ({ author, isIndex }) => (
  <div className='author'>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className='author__photo'
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className='author__title'>
        <Link className='author__title-link' to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className='author__title'>
        <Link className='author__title-link' to="/">{author.name}</Link>
      </h2>
    )}
    <p className='author__subtitle'>{author.bio}</p>
  </div>
);

export default Author;
