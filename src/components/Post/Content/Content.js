// @flow strict
import React from 'react';
import { isBefore } from 'date-fns';
import './Content.scss';

const Content = (props) => {
  const hasMeta = props.youtube || props.calendar || props.recorded || props.speaker;

  const d = new Date(props.date);
  d.setDate(d.getDate + 1);
  const before = isBefore(d, new Date());
  return(
  <div className="content">
    <h1 className="content__title">{props.title}</h1>
    { props.subtitle && <h2 className="content__subtitle">{props.subtitle}</h2> }

    { props.speakers && props.speakers.length && (
      <div className="content__speakers">
      {props.speakers.map(speaker => {
        return (
        <div className="content__speaker">
          <div className="speaker-image">
            <img src={speaker.image} />
          </div>
          <h2>{speaker.name}</h2>
          <div className="speaker-pronouns">({speaker.pronouns})</div>
          <div className="speaker-title">{speaker.title}</div>
        </div>);
      })}
      </div>
    )}
    <div className="content__body"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />

    { hasMeta && (
      <div className="content__meta">
        { props.youtube && <iframe title={props.title} src={`https://www.youtube.com/embed/${props.youtube}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
        { props.footnote && <div className="content__footnote">* {props.footnote}</div>}
        { props.calendar && !before && (
          <ul className="calendar">
            <li className="calendar__list-item">
              <a target="_blank" href={props.calendar}>Add to Google Calendar</a>
            </li>
          </ul>
        )}

        {props.recorded && props.speaker && <hr /> }

        {props.recorded && (
          <p className="content-meta-date">
            <b>{before ? "Recorded" : "Recording"}:</b> {props.recorded}
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
