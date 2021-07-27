import React from 'react';

import styles from './member-past.scss';

const MemberPastList = (props) => {

  return(
    <section className="past-members">
      <h2>Past Volunteers</h2>
      <div className="past-members-grid">
      { props.nodes.map((v, i) => {
        const l = v.frontmatter.social[0];
        return(
        <div className="volunteer" index={`volunteer-${i}`}>
          <a href={l.uri} target="_blank" name={`${l.name} for ${v.frontmatter.name}`}>
            {v.frontmatter.name}
          </a>
        </div>
        )
      })}
      </div>
    </section>
  );
}

export default MemberPastList;
