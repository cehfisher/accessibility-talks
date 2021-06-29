import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import classNames from 'classnames';
import styles from './PostTeaser.scss';

const PostTeaser = (props) => {

  const upcoming = moment(props.node.frontmatter.date).unix() > moment().unix();
  const next = props.node.frontmatter.next === true;
  const classes = classNames(
    styles['post__item'],
    { [`${styles['post__item-upcoming']}`]: upcoming},
    { [`${styles['post__item-next']}`]: next}
  );

  return(
    <div className={classes} key={props.node.fields.slug}>
        <div className={styles['post__item-meta']}>
          <time className={'post__meta-time'} dateTime={moment(props.node.frontmatter.date).format('MMMM YYYY')}>
            {moment(props.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['post__item-meta-divider']} />
        </div>
        <h2 className={styles['post__item-title']}>
          <Link className={styles['post__item-title-link']} to={props.node.fields.slug}>{props.node.frontmatter.title}</Link>
        </h2>
        <div className={styles['post__item-content']}>
          <div className={styles['post__item-image']}><img
              src={props.node.frontmatter.socialImage}
              className={'social-image'}
              alt=""
            />
            <h3 className={styles['post__item-subtitle']}>{props.node.frontmatter.subtitle}</h3>
          </div>
            <p className={styles['post__item-description']}>{props.node.frontmatter.description}<br /><br />
            <Link className={styles['post__item-readmore']} to={props.node.fields.slug}>Read more<span class="sr-only"> about {props.node.frontmatter.title}</span> &#8594;</Link>
          </p>
        </div>
        <hr class="hr-last" />
      </div>
  )
}

export default PostTeaser;
