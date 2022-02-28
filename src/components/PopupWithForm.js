import React from 'react';

const PopupWithForm = props => {
  return (
    <div id={props.id} className={`popup`}>
      <div className='popup__body'>
        <button type='button' aria-label='Закрыть всплывающее окно' className='popup__close'></button>
        <h2 className='popup__title'>{props.title}</h2>
        <form action='#' method='post' name={props.formName} id={props.formId} className='popup__form'>
          {props.children}
          <button type='submit' className='popup__submit'>
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
