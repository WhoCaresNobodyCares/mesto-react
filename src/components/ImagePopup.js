import React from 'react';

const ImagePopup = props => {
  return (
    <div id='imageModalPopup' className={props.card.name !== '' ? 'popup popup_opened' : 'popup'}>
      <div className='popup__content'>
        <button type='button' aria-label='Закрыть модальное окно' className='popup__close' onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className='popup__image' />
        <span className='popup__caption'>{props.card.name}</span>
      </div>
    </div>
  );
};

export default ImagePopup;
