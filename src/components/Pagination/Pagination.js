// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import './Pagination.scss';

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}) => {
  const prevClassName = classNames({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = classNames({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  return (
    <div className='pagination'>
      <div className='pagination__prev'>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className='pagination__next'>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
