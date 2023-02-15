// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import './Sidebar.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <aside className='sidebar'>
      <div className='sidebar__inner'>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </aside>
  );
};

export default Sidebar;
