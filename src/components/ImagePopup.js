import React from 'react';

const ImagePopup = props => {
  return (
    <div id='imageModalPopup' className='popup'>
      <div className='popup__content'>
        <button type='button' aria-label='Закрыть модальное окно' className='popup__close'></button>
        <img src='#' alt='Изображение' className='popup__image' />
        <span className='popup__caption'></span>
      </div>
    </div>
  );
};

export default ImagePopup;
