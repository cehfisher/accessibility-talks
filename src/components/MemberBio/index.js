import React from 'react';
import styles from './member-bio.scss';

const MemberBio = (props) => {
  return(
    <div className="member-bio">
      <img src={props.socialImage} className="bio-image" alt={props.name} />
      <h2>
        {props.name}
        {props.pronuns && (
          <span className="pronouns">{props.pronouns}</span>)
        }
      </h2>
      <h3 className="member-bio__title seafoam">{props.title}</h3>
      <div className="member-bio__body">
        { props.bio}
      </div>
      { props.callout && (
        <div className="member-callout">
          <p><strong>Notable Contributions to Highlight</strong></p>
          <ul>
            { props.callout.map((call, i) => <li key={i}>{call}</li>)}
          </ul>
        </div>
      )}

      { props.social && (
        <div className="member-social">
          <ul className="social-links">
            <li>
              <p className="connect"><strong>Connect</strong></p>
            </li>
            {props.social.map((link, j) => <li key={j}><a href={link.uri}>{link.name}</a></li>)}
          </ul>
        </div>
      )}

    </div>
  )
}

export default MemberBio;
