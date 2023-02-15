import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Page.scss';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <main ref={pageRef} className='page'>
      <div className='page__inner'>
        { title && <h1 className='page__title'>{title}</h1>}
        <div className='page__body'>
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
