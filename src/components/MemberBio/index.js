import React from 'react';
import './member-bio.scss';
import {Link} from 'gatsby';

const MemberBio = (props) => {
  return(
    <div className="member-bio">
      <img src={props.socialImage} className="bio-image" alt={props.name} />
      <h2 className="member-bio__name">
        {props.name}
        {props.pronouns && (
          <span className="pronouns">({props.pronouns})</span>)
        }
      </h2>
      <h3 className="member-bio__title seafoam">
        {props.title}
      </h3>
      <div className="member-bio__body">
        { props.bio}
      </div>
      { (props.callout || props.social) && (
        <div className="member-bio__meta">
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
      )}

      <div className="member-bio__link">
        <Link to="/pages/about">Back to About</Link>
      </div>

    </div>
  )
}

export default MemberBio;
