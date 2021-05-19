import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';

const Page = ({ title, children }) => {
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

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Page;
