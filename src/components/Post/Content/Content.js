// @flow strict
import React from 'react';
import styles from './Content.module.scss';

const Content = (props) => {
  const hasMeta = props.youtube || props.calendar || props.recorded || props.speaker;
  return(
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{props.title}</h1>
    <h2 className={styles['content__subtitle']}>{props.subtitle}</h2>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: props.body }} />


    { hasMeta && (
      <div className={styles['content__meta']}>
        { props.youtube && <iframe title={props.title} src={`https://www.youtube.com/embed/${props.youtube}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
        { props.calendar && (
          <ul className="calendar">
            <li className="calendar__list-item">
              <a target="_blank" href={props.calendar}>Add to Google Calendar</a>
            </li>
          </ul>
        )}

        {props.recorded && props.speaker && <hr /> }

        {props.recorded && (
          <p className="content-meta-date">
            <b>Recorded:</b> {props.recorded}
          </p>
        )}
        {props.speaker && (
          <p className="content-speaker-data">
            <b>Speaker:</b> {props.speaker}
            {props.speakerContact && (
              <span className="speakerContact">({props.speakerContact.name} - {props.speakerContact.contact})</span>
            )}
          </p>
        )}
      </div>
    )}
  </div>
  )
};

export default Content;
