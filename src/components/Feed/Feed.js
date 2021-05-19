// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Feed.module.scss';
import PostTeaser from '../teasers/PostTeaser/PostTeaser';

const Feed = ({ edges }) => {


  return(
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <PostTeaser {...edge} />
    ))}
  </div>
  )
};

export default Feed;
