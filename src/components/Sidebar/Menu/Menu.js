// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          { item.external && <a href={item.path} target="_blank" rel="noopener noreferrer">{item.label}</a>}
          { !item.external && (<Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
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
