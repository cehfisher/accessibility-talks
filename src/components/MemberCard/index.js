import React from 'react';
import { Link } from 'gatsby';

import styles from './member-card.scss';

const MemberCard = (props) => {
  return(
    <div class="member-card">
      <img src={props.socialImage} className="social-image" alt={props.name} />
      <h3>{props.name}</h3>
      <Link to={props.link}>Full Bio  →</Link>
    </div>
  )
}

export default MemberCard;
