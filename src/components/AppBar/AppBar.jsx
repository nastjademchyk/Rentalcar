import s from './AppBar.module.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import sprite from '../../assets/icons.svg';

const AppBar = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/">
        <svg className={s.icon} width="104" height="16">
          <use href={`${sprite}#icon-Logo`} />
        </svg>
      </Link>
      <div className={s.nav}>
        <NavLink to="/" className={s.home}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={s.home}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default AppBar;
