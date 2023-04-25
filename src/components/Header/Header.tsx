import React, { FC } from 'react';

import logo from '../../assets/image/logo.png';

import head from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={head.header}>
      <div className={head.header__image}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
