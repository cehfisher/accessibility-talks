import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  subtitle?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <main ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Page;