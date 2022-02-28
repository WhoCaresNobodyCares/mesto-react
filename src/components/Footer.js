import React from 'react';

const Footer = () => {
  return (
    <footer className='footer body__footer'>
      <p className='footer__description'>&copy; {new Date().getFullYear()} Mesto Russia</p>
    </footer>
  );
};

export default Footer;
