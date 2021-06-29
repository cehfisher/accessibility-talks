
import React from 'react';
import styles from './Feed.module.scss';
import PostTeaser from '../teasers/PostTeaser/PostTeaser';
import PostNext from '../teasers/PostNext';

const Feed = ({ edges }) => {


  return(
  <div className={styles['feed']}>
    {edges.map((edge) => {
      if (edge.node.frontmatter.next) return <PostNext {...edge} />
      return <PostTeaser {...edge} />
    })}
  </div>
  )
};

export default Feed;
