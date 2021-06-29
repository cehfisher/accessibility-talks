import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './PostNext.scss';

const PostTeaser = (props) => {

  return(
    <div className='post-next' key={props.node.fields.slug}>
      <div className='post-next__item-meta'>
        <h2>Next Talk</h2>
        <time className={'post-next__meta-time'} dateTime={moment(props.node.frontmatter.date).format('MMMM YYYY')}>
          {moment(props.node.frontmatter.date).format('MMMM YYYY')}
        </time>
        <h2 className='post-next__item-title'>
          <Link className='post__item-title-link' to={props.node.fields.slug}>{props.node.frontmatter.title}</Link>
        </h2>
      </div>
      <div className='post-next__item-content'>

        <div className='post-next__item-image'>
            <img
              src={props.node.frontmatter.socialImage}
              className='social-image-next'
              alt={props.node.frontmatter.subtitle}
            />
            <h3 className="post-next__item-speaker">{props.node.frontmatter.subtitle}</h3>
          </div>
        <p className='post-next__item-description'>{props.node.frontmatter.description}
        <br />
        <Link className='post-next__item-readmore' to={props.node.fields.slug}>Read more<span class="sr-only"> about {props.node.frontmatter.title}</span> &#8594;</Link>
        </p>
      </div>

      <hr class="hr-last" />
    </div>
  )
}

export default PostTeaser;
