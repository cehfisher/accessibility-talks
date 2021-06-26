import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './PostNext.scss';

const PostTeaser = (props) => {

  return(
    <div className='post_next' key={props.node.fields.slug}>
      <div className='post_next--meta'>
        <div className="post_next--meta-data">
          <time className={'post_next--meta-time'} dateTime={moment(props.node.frontmatter.date).format('MMMM YYYY')}>
            {moment(props.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <h2 className='post_next--title'>
            <Link className='post_next--title-link' to={props.node.fields.slug}>{props.node.frontmatter.title}</Link>
          </h2>
        </div>
      </div>
      <div className='post_next--content'>

        <div className='post_next--image'>
            <img
              src={props.node.frontmatter.socialImage}
              className='social-image'
              alt={props.node.frontmatter.subtitle}
            />
            <h3 className="post_next--speaker">{props.node.frontmatter.subtitle}</h3>
          </div>
        <p className='post_next--description'>{props.node.frontmatter.description}
        <br />
        <Link className='post_next--readmore' to={props.node.fields.slug}>Read more<span class="sr-only"> about {props.node.frontmatter.title}</span> &#8594;</Link>
        </p>
      </div>

      <hr class="hr-last" />
    </div>
  )
}

export default PostTeaser;
