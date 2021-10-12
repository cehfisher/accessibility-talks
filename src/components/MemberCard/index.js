import React from 'react';
import { Link } from 'gatsby';

import './member-card.scss';

const MemberCard = (props) => {
  return(
    <div className="member-card">
      <img src={props.socialImage} className="social-image" alt={props.name} />
      <h3>{props.name}</h3>
      <Link to={props.link}>Full Bio  →</Link>
    </div>
  )
}

export default MemberCard;
