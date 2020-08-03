// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <h3 className={styles['feed__item-subtitle']}>{edge.node.frontmatter.subtitle}</h3>
        <div className={styles['feed__item-image']}><img
            src={edge.node.frontmatter.socialImage}
            className={'social-image'}
            alt=""
          />
        </div>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}<br /><br />
        <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read more<span class="sr-only"> about {edge.node.frontmatter.title}</span> &#8594;</Link></p><hr class="hr-last" />
      </div>
    ))}
  </div>
);

export default Feed;
