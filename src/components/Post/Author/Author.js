// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import './Author.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className='author'>
      <p className='author__bio'>
        {author.bio}
        <a
          className='author__bio-twitter'
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
