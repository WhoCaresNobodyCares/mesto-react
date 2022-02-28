import React from 'react';

import logoPath from '../images/header__logo.svg';

const Header = () => {
  return (
    <header className='header body__header'>
      <a href='#' className='header__link'>
        <img src={logoPath} alt='Лого' className='header__logo' />
      </a>
    </header>
  );
};

export default Header;
