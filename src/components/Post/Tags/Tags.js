// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import './Tags.scss';

const Tags = ({ tags, tagSlugs }) => (
  <div className='tags'>
    <ul className='tags__list'>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className='tags__list-item' key={tags[i]}>
          <Link to={slug} className='tags__list-item-link'>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
