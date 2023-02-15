// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import './Menu.scss';

const Menu = ({ menu }) => (
  <nav className='menu'>
    <ul className='menu__list'>
      {menu.map((item) => (
        <li className='menu__list-item' key={item.path}>
          { item.external && <a href={item.path} target="_blank" rel="noopener noreferrer">{item.label}</a>}
          { !item.external && (<Link
            to={item.path}
            className='menu__list-item-link'
            activeClassName='menu__list-item-link--active'
          >
            {item.label}
          </Link>)
          }
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
