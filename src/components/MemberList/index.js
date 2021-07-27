import React from 'react';
import MemberCard from '../MemberCard';

const MemberList = (props) => {

  return(
    <section className="members">
      <h3>Meet Our Members</h3>
      <div className="member-grid">
        { props.nodes.map((card, i) => (
          <MemberCard link={card.fields.slug} {...card.frontmatter} index={`member-${i}`} />
        ))}
      </div>
    </section>
  );
}

export default MemberList;
