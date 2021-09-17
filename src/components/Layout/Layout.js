// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';
import classNames from 'classnames';

const Layout = ({
  children,
  title,
  description,
  socialImage,
  type
}) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);
  const classes = classNames(
    'layout',
    {[`page__${type}`]: type}
  );

  return (
    <div className={classes}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  socialImage: PropTypes.string
}

export default Layout;
