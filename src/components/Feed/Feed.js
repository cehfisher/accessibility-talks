
import React from 'react';
import styles from './Feed.module.scss';
import PostTeaser from '../teasers/PostTeaser/PostTeaser';
import PostNext from '../teasers/PostNext';

const Feed = (props) => {
  const { edges, next, future } = props;

  return(
  <div className={styles['feed']}>
    { next && <PostNext {...next} />}
    { future && future.map(edge => <PostTeaser {...edge} />)}
    {edges.map(edge => <PostTeaser {...edge} />)}
  </div>
  )
};

export default Feed;
