import React from 'react';
import MemberCard from '../MemberCard';

import './member-list.scss';

const MemberList = (props) => {

  return(
    <section className="members">
      <h2>Meet Our Members</h2>
      <div className="member-grid">
        { props.nodes.map((card, i) => (
          <MemberCard link={card.fields.slug} {...card.frontmatter} index={`member-${i}`} />
        ))}
      </div>
    </section>
  );
}

export default MemberList;
