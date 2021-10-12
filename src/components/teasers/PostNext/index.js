import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './PostNext.scss';

const PostTeaser = (props) => {

  return(
    <div className='post-next' key={props.node.fields.slug}>
      <div className='post-next__item-meta'>
        <div className='post-next__item-image'>
            <img
            src={props.node.frontmatter.socialImage}
            className='social-image-next'
            alt={props.node.frontmatter.subtitle}
            />
          </div>
          <div className='post-next__item-content'>
            <div>
              <h2 className={'post-next__item-date'} dateTime={moment(props.node.frontmatter.date).format('MMMM YYYY')}>
                {moment(props.node.frontmatter.date).format('MMMM YYYY')}
              </h2>
              <h3 className="post-next__item-speaker">{props.node.frontmatter.subtitle}</h3>
              <h3 className='post-next__item-title'>
                <Link className='post-next__item-title-link' to={props.node.fields.slug}>{props.node.frontmatter.title}</Link>
              </h3>
            </div>
            <p className='post-next__item-description'>{props.node.frontmatter.description}
              <br /><br />
              <Link className='post-next__item-readmore' to={props.node.fields.slug}>Read more<span className="sr-only"> about {props.node.frontmatter.title}</span> &#8594;</Link>
            </p>
        </div>
      </div>

      <hr className="hr-last" />
    </div>
  )
}

export default PostTeaser;
