// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  subtitle: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <h2 className={styles['content__subtitle']}>{title}</h2>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
