import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import classNames from 'classnames';
import './PostTeaser.scss';

const PostTeaser = (props) => {

  const classes = classNames(
    'post__item'
  );

  return(
    <div className={classes} key={props.node.fields.slug}>
        <div className={'post__item-meta'}>
          <time className={'post__item-date'} dateTime={moment(props.node.frontmatter.date).format('MMMM YYYY')}>
            {moment(props.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={'post__item-meta-divider'} />
        </div>
        <h2 className={'post__item-title'}>
          <Link className={'post__item-title-link'} to={props.node.fields.slug}>{props.node.frontmatter.title}</Link>
        </h2>
        <div className={'post__item-content'}>
          <div className={'post__item-image'}>
            <img
              src={props.node.frontmatter.socialImage}
              className={'social-image'}
              alt=""
            />
            <h3 className={'post__item-subtitle'}>{props.node.frontmatter.subtitle}</h3>
          </div>
            <p className={'post__item-description'}>{props.node.frontmatter.description}<br /><br />
            <Link className={'post__item-readmore'} to={props.node.fields.slug}>Read more<span className="sr-only"> about {props.node.frontmatter.title}</span> &#8594;</Link>
          </p>
        </div>
        <hr className="hr-last" />
      </div>
  )
}

export default PostTeaser;
